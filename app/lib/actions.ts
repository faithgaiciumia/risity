"use server";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { createClient, createInvoice } from "./data";
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
    // const client_name = formData.get("clientName") as string;
    const client_email = formData.get("clientEmail") as string;
    const total_amount = parseInt(formData.get("amount") as string);
    const status = formData.get("status") as string;

    const invoiceDateStr = formData.get("invoiceDate") as string;
    const invoice_date = new Date(invoiceDateStr);

    const dueDateStr = formData.get("dueDate") as string;
    const due_date = new Date(dueDateStr);

    await createInvoice({
      user_email,
      status,
      invoice_date,
      due_date,
      client_email,
      total_amount,
    });
    return "Invoice created successfully.";
  } catch (error) {
    console.error("createNewInvoice error:", error);
    return "Error creating invoice. Try again.";
  }
}

export async function createNewClient(
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
    const name = formData.get("clientName") as string;
    const email = formData.get("clientEmail") as string;

    await createClient({
      user_email,
      name,
      email,
    });
    return "Client created successfully.";
  } catch (error) {
    console.error("createNewClient error:", error);
    return "Error creating client. Try again.";
  }
}
