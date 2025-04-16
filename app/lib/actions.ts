"use server";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { createInvoice } from "./data";
import { getSession } from "./getsession";

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

export async function createNewInvoice(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    //check if user is logged in and extract email
    const session = await getSession();
    if (!session || !session.user?.email) {
      throw new Error("user not logged in");
    }

    // get the rest of the fields
    const user_email = session.user.email;
    const client_name = formData.get("clientName") as string;
    const client_email = formData.get("clientEmail") as string;
    const amount = parseInt(formData.get("amount") as string);
    const status = formData.get("status") as string;

    const invoiceDateStr = formData.get("date") as string;
    const invoice_date = new Date(invoiceDateStr);

    await createInvoice({
      user_email,
      amount,
      status,
      invoice_date,
      client_email,
      client_name,
    });
  } catch (error) {
    return "Something went wrong.";
  }
}
