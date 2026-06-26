import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as jose from "jose";

const alg = "HS256";
const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);

export async function parseBody(request) {
  try {
    const body = await request.json();
    return [null, body];
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "SyntaxError") {
        return ["فرمت body  نادرست است.", null];
      }
      return [error.message, null];
    }

    if (typeof error === "string") {
      return [error, null];
    }

    return ["خطای غیر منتظره رخ داد.", null];
  }
}

export async function wrapWithTryCatch(callback) {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "خطای غیرمنتظره رخ داد." },
      { status: 500 },
    );
  }
}

export async function setAuthCookie() {
  const cookieStore = cookies();

  const token = await new jose.SignJWT()
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("3d")
    .sign(secret);

  cookieStore.set(process.env.TOKEN_KEY, token, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 3 * 24 * 3600,
  });
}

export async function removeAuthCookie() {
  const cookieStore = cookies();
  cookieStore.delete(process.env.TOKEN_KEY);
}

export async function isSignedIn(request) {
  const token = request.cookies.get(process.env.TOKEN_KEY)?.value;

  if (!token) {
    return false;
  }

  try {
    await jose.jwtVerify(token, secret);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
