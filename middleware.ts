import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["es", "en"];

function matchAccept(header: string): string | null {
  const parts = header.split(",").map((part) => part.split(";")[0]?.trim().toLowerCase() || "");
  for (const part of parts) {
    const base = part.split("-")[0];
    if (LOCALES.includes(base)) return base;
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] || "";

  if (LOCALES.includes(first)) {
    const response = NextResponse.next();
    response.headers.set("x-orion-locale", first);
    return response;
  }

  const cookie = request.cookies.get("orion_locale")?.value;
  const locale =
    (cookie && LOCALES.includes(cookie) ? cookie : null) ||
    matchAccept(request.headers.get("accept-language") || "") ||
    "es";

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  const response = NextResponse.redirect(url);
  response.headers.set("x-orion-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images/|cv.pdf|icon.svg|icon.png|opengraph-image|sitemap.xml|robots.txt|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)).*)"],
};
