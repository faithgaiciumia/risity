"use server";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function signInWithResend(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("resend", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return "Something went wrong.";
    }
    throw error;
  }
}
export async function handleSignOut() {
  await signOut({ redirectTo: "/" });
}
