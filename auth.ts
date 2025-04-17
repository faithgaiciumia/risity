import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
import next from "next";
import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { getSession } from "./app/lib/getsession";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  return {
    ...authConfig,
    pages: { signIn: "/login" },
    adapter: NeonAdapter(pool),
    providers: [Resend({ from: "Risity@login.gaiciumiafaith.com" })],
    callbacks: {
      async jwt({ token, account, user }) {
        if (account?.provider === "resend" && user) {
          token.email = user.email;
        }
        return token;
      },

      async session({ session, token }) {
        return session;
      },
      async authorized({ request: { nextUrl } }) {
        const session = await getSession();
        const isLoggedIn = !!session?.user;
        const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
        if (isOnDashboard && !isLoggedIn) {
          // Redirect to login if not authenticated, with callback URL
          return Response.redirect(
            new URL(`/login?callbackUrl=${nextUrl.pathname}`, nextUrl)
          );
        }

        return true; // Allow access to all other pages
      },
    },
    session: {
      strategy: "jwt",
    },
  };
});
