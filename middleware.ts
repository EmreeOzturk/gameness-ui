import { auth as middleware } from "@/auth";
export default middleware((req) => {
  if (!req.auth && req.nextUrl.pathname === "/missions") {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};