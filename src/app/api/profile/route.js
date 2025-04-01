import { NextResponse } from "next/server";

import db from "../../../../utils/db";

// Get client details by client id or name
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  try {
    let clientProfile;

    if (id) {
      // Validate ID is a number
      if (isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: "Invalid ID format. Please enter a valid number." },
          { status: 400 }
        );
      }

      clientProfile = await db.profile.findUnique({
        where: {
          id: parseInt(id),
        },
        select: {
          id: true,
          name: true,
          gender: true,
          age: true,
          city: true,
          financial: {
            select: {
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

      clientProfile = await db.profile.findMany({
        where: {
          name: { contains: name, mode: 'insensitive' },
        },
        select: {
          id: true,
          name: true,
          gender: true,
          age: true,
          city: true,
          financial: {
            select: {
              goldMembership: true,
            },
          },
        },
      });
    } else {
      return NextResponse.json(
        { error: "Please enter either a name or ID" },
        { status: 400 }
      );
    }

    if (!clientProfile || (Array.isArray(clientProfile) && clientProfile.length === 0)) {
      return NextResponse.json(
        { error: "No client profile found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ clientProfile }, { status: 200 });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await db.$disconnect();
  }
}
