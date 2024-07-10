import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/mongodb"

const collection = db.collection("users");

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const results = await collection.find({}).toArray();
    return NextResponse.json({
      message: "Success get users",
      data: results,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
