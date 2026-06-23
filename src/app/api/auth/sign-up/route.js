import { NextResponse } from "next/server";

export function POST(request) {
  console.log(request);

  return NextResponse.json({ message: "Hello, friend" });
}
