import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const isUnderConstruction =
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true";
  const isUnderConstructionPath = request.nextUrl.pathname.startsWith(
    "/under-construction",
  );

  if (isUnderConstruction && !isUnderConstructionPath) {
    return NextResponse.rewrite(new URL("/under-construction", request.url));
  }

  if (!isUnderConstruction && isUnderConstructionPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
