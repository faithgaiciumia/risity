import type { NextAuthConfig } from "next-auth";

// Authentication Configuration
export const authConfig = {
  pages: {
    signIn: "/login",
    verifyRequest: "/api/auth/verify-request",
  },
  providers: [],
  callbacks: {},
} satisfies NextAuthConfig;
