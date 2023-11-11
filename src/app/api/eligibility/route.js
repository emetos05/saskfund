import { NextResponse } from "next/server";

import db from "../../../../utils/db";

// Variable declarations
let eligibility = false;
let maxMonthlyPayment;

const baseLivingCost = 1100;

const livingCost = {
  provincial: baseLivingCost,
  regina: baseLivingCost * 0.9695,
  saskatoon: baseLivingCost * 0.998,
  "moose jaw": baseLivingCost * 1.0325,
  "north battleford": baseLivingCost * 1.051,
};

// Get client data for eligibility check
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    let clientData;

    if (id) {
      clientData = await db.profile.findUnique({
        where: {
          id: parseInt(id),
        },
        select: {
          id: true,
          name: true,
          age: true,
          city: true,
          lengthAtResidence: true,
          education: true,
          financial: {
            select: {
              income: true,
              houseValue: true,
              creditCardDebt: true,
              charitableDonations: true,
              goldMembership: true,
            },
          },
        },
      });
    } else {
      return NextResponse.json({ error: "Enter client ID" }, { status: 400 });
    }

    if (clientData) {
      const minDebtPaymentMonthly =
        (clientData.financial.creditCardDebt / 12) * 0.18;

      const monthlyLivingCost = clientData.city
        ? livingCost[clientData.city.toLowerCase()]
        : baseLivingCost;

      const deductions =
        minDebtPaymentMonthly +
        clientData.financial.charitableDonations / 12 +
        monthlyLivingCost;

      if (
        (clientData.age >= 25 ||
          (clientData.age > 21 && clientData.education > 3)) &&
        clientData.financial.houseValue === 0 &&
        clientData.lengthAtResidence <= 5 &&
        clientData.financial.income / 12 - deductions > 0
      ) {
        eligibility = true;
        maxMonthlyPayment = (clientData.financial.income / 12) * 0.4;
        if (clientData.financial.goldMembership) {
          maxMonthlyPayment = (clientData.financial.income / 12) * 0.45;
        }
      }
      return NextResponse.json(
        {
          name: clientData.name,
          clientId: clientData.id,
          eligibility,
          maxMonthlyPayment,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { msg: "Client data not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching profile", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  } finally {
    await db.$disconnect();
  }
}
