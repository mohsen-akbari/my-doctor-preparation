import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { parseBody, setAuthCookie, wrapWithTryCatch } from "@/utils/api.utils";

export async function POST(request) {
  return wrapWithTryCatch(async () => {
    const [parsError, body] = await parseBody(request);

    if (parsError !== null) {
      return NextResponse.json({ error: parsError }, { status: 400 });
    }

    const foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (!foundUser) {
      return NextResponse.json(
        { error: "نام کاربری یا رمز عبور اشتباه است." },
        { status: 404 },
      );
    }

    if (body.password !== foundUser.password) {
      return NextResponse.json(
        { error: "نام کاربری یا رمز عبور اشتباه است." },
        { status: 401 },
      );
    }

    await setAuthCookie();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
