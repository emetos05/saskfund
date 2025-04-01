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
  const name = searchParams.get("name");

  try {
    let clientData;

    if (id) {
      // Validate ID is a number
      if (isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: "Invalid ID format. Please enter a valid number." },
          { status: 400 }
        );
      }

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
    } else if (name) {
      // Validate name is not empty and has minimum length
      if (name.trim().length < 2) {
        return NextResponse.json(
          { error: "Name must be at least 2 characters long." },
          { status: 400 }
        );
      }

      const profiles = await db.profile.findMany({
        where: {
          name: { contains: name, mode: 'insensitive' },
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

      if (profiles.length === 0) {
        return NextResponse.json(
          { error: "No client found with this name" },
          { status: 404 }
        );
      }

      if (profiles.length > 1) {
        return NextResponse.json(
          { 
            error: "Multiple clients found. Please use client ID instead.",
            profiles: profiles.map(p => ({ id: p.id, name: p.name }))
          },
          { status: 400 }
        );
      }

      clientData = profiles[0];
    } else {
      return NextResponse.json(
        { error: "Please enter either a name or ID" },
        { status: 400 }
      );
    }

    if (!clientData) {
      return NextResponse.json(
        { error: "Client not found" },
        { status: 404 }
      );
    }
 
    // Calculate eligibility
    const city = clientData.city?.toLowerCase() || 'provincial';
    const monthlyLivingCost = livingCost[city] || livingCost.provincial;

    const monthlyIncome = clientData.financial.income / 12;
    const monthlyCreditCardDebt = clientData.financial.creditCardDebt / 12;
    const monthlyCharitableDonations = clientData.financial.charitableDonations / 12;

    const minMonthlyDebtPayment = monthlyCreditCardDebt * 0.18;
    const deductions = minMonthlyDebtPayment + monthlyCharitableDonations + monthlyLivingCost; 

    maxMonthlyPayment = clientData.financial.goldMembership ? monthlyIncome * 0.45 : monthlyIncome * 0.4;

    // eligibility = monthlyIncome - deductions > maxMonthlyPayment;

    if (
      (clientData.age >= 25 || (clientData.age > 21 && clientData.education > 3)) 
        && clientData.financial.houseValue === 0 
        && clientData.lengthAtResidence <= 5 
        && monthlyIncome - deductions > 0
    ) {
      eligibility = true;      
    } 

    return NextResponse.json({
      clientId: clientData.id,
      name: clientData.name,
      eligibility,
      maxMonthlyPayment: Math.round(maxMonthlyPayment)
    });

  } catch (error) {
    console.error("Error checking eligibility:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await db.$disconnect();
  }
}
