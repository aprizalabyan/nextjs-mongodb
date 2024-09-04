import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/mongodb";

const collection = db.collection("users");

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const results = await collection.find({}).toArray();
    return NextResponse.json({
      message: "Success get users",
      data: results,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const results = await collection.insertOne(reqBody);
    return NextResponse.json(
      {
        message: "Success add new user",
        data: { id: results.insertedId },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
