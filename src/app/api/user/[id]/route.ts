import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import db from "@/lib/mongodb";

const collection = db.collection("users");

export async function PUT(req: NextRequest, { params }: { params: { id: string }}) {
  try {
    const timestamp = Date.now()
    const isoDateFormat = new Date(timestamp).toISOString()
    const reqBody = await req.json();
    const results = await collection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: {
          name: reqBody.name,
          email: reqBody.email,
          updatedAt: isoDateFormat,
      }}
    )

    if (results.matchedCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "User updated successfully",
        data: [],
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest,{ params }: { params: { id: string }}) {
  try {
    const results = await collection.deleteOne({ _id: new ObjectId(params.id) })

    if (results.deletedCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "User deleted successfully",
        data: [],
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
