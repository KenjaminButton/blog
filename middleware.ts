import { withAuth } from "next-auth/middleware";

// Protect all routes under /admin
export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: "/admin/:path*",
};
