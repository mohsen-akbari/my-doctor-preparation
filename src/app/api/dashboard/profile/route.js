import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { extractUserId, parseBody, wrapWithTryCatch } from "@/utils/api.utils";
import { hashPassword } from "@/utils/bcrypt.utils";

export async function GET(request) {
  return wrapWithTryCatch(async () => {
    const foundUser = await findUser(request);

    if (!foundUser) {
      return NextResponse.json(
        { error: ".ابتدا وارد حساب کاربری خود شوید" },
        { status: 401 },
      );
    }

    const { id, password, ...safeUser } = foundUser;

    return NextResponse.json({ data: safeUser }, { status: 200 });
  });
}

export async function PATCH(request) {
  return wrapWithTryCatch(async () => {
    const [parsError, body] = await parseBody(request);

    if (parsError !== null) {
      return NextResponse.json({ error: parsError }, { status: 400 });
    }

    const foundUser = await findUser(request);

    if (!foundUser) {
      return NextResponse.json(
        { error: ".ابتدا وارد حساب کاربری خود شوید" },
        { status: 401 },
      );
    }

    if (body.password) {
      body.password = await hashPassword(body.password);
    }

    await prisma.user.update({
      where: { id: foundUser.id },
      data: body,
    });

    return NextResponse.json({ data: null }, { status: 200 });
  });
}

async function findUser(request) {
  const userId = await extractUserId(request);

  if (!userId) {
    return null;
  }

  const foundUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!foundUser) {
    return null;
  }

  return foundUser;
}
