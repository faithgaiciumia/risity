import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  return {
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
    },
    session: {
      strategy: "jwt",
    },
  };
});
