import { NextResponse } from "next/server";

import { removeAuthCookie, wrapWithTryCatch } from "@/utils/api.utils";

export async function POST() {
  return wrapWithTryCatch(async () => {
    await removeAuthCookie();

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
