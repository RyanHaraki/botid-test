import { checkBotId } from "botid/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const verification = await checkBotId();

  if (verification.isBot) {
    return NextResponse.json(
      { error: "Access denied - Bot detected" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const { email, password, name } = body;

    // Validate required fields
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing required fields: email, password, name" },
        { status: 400 }
      );
    }

    // Mock user creation - in a real app, you'd save to database
    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      createdAt: new Date().toISOString(),
    };

    // Simulate some processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      user: mockUser,
      verification,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body", verification },
      { status: 400 }
    );
  }
}
