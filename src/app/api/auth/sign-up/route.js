import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { parseBody, wrapWithTryCatch } from "@/utils/api.utils";

export async function POST(request) {
  return wrapWithTryCatch(async () => {
    const [parsError, body] = await parseBody(request);

    if (parsError !== null) {
      return NextResponse.json({ error: parsError }, { status: 400 });
    }

    let foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (foundUser) {
      return NextResponse.json(
        { error: "نام کاربری تکراری است." },
        { status: 400 },
      );
    }

    foundUser = await prisma.user.findUnique({ where: { email: body.email } });

    if (foundUser) {
      return NextResponse.json({ error: "ایمیل تکراری است." }, { status: 400 });
    }

    await prisma.user.create({ data: body });

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
