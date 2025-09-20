import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const protectedRoutes = ["/dashboard"];

    if (protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path))) {
        if (!token) {
            const loginUrl = new URL("/login", req.url);

            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
