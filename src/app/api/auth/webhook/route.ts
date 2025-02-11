import { NextResponse } from "next/server";
import { prisma } from "@/lib/utils"; // Ensure your Prisma client is correctly imported

export async function POST(req: Request) {
  try {
    const { id, first_name, last_name } = await req.json();

    // Save user to NeonDB (PostgreSQL) using Prisma
    await prisma.user.create({
      data: {
        id,
        fullname: `${first_name || ""} ${last_name || ""}`.trim(), // Store full name
        clerkId: id, // Store Clerk ID
        type: "user", // Default user type, modify as needed
      },
    });

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


