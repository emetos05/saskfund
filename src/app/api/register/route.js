import { NextResponse } from "next/server";
import db from "../../../../utils/db";

export async function POST(request) {
  try {
    const data = await request.json();
    
    const profile = await db.profile.create({
      data: {
        name: data.name,
        gender: data.gender,
        age: parseInt(data.age),
        city: data.city || null,
        lengthAtResidence: parseInt(data.lengthAtResidence),
        education: data.education ? parseInt(data.education) : null,
        financial: {
          create: {
            income: parseInt(data.income),
            houseValue: parseInt(data.houseValue),
            employmentYears: parseInt(data.employmentYears),
            employmentCategory: parseInt(data.employmentCategory),
            creditCardDebt: parseInt(data.creditCardDebt),
            charitableDonations: parseInt(data.charitableDonations),
            goldMembership: parseInt(data.goldMembership)
          }
        }
      }
    });

    return NextResponse.json({ 
      message: "Registration successful",
      profileId: profile.id 
    }, { status: 201 });

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ 
      error: "Registration failed" 
    }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
} 