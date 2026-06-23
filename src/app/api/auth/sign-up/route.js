import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { wrapWithTryCatch } from "@/utils/api.utils";

export async function POST(request) {
  return wrapWithTryCatch(async () => {
    const body = await request.json();

    await prisma.user.create({ data: body });

    return NextResponse.json(
      { data: null },
      { status: 201 },
    );
  });
}
