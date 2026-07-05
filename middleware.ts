import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isUnderConstruction =
        process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true";

    if (
        isUnderConstruction &&
        !request.nextUrl.pathname.startsWith("/under-construction")
    ) {
        return NextResponse.rewrite(
            new URL("/under-construction", request.url),
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
