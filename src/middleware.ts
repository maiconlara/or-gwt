import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
    const cookie = cookies().get("usu_token")?.value;

    if (!cookie) {
        // return NextResponse.redirect(new URL("https://organizador.ifestei.com.br", request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
