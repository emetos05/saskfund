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
      clientProfile = await db.profile.findMany({
        where: {
          name: { contains: name },
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
        { error: "Enter either a name or ID" },
        { status: 400 }
      );
    }

    if (clientProfile) {
      return NextResponse.json({ clientProfile }, { status: 200 });
    } else {
      return NextResponse.json(
        { msg: "Client profile not found" },
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
