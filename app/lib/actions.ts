"use server";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import {
  createClient,
  createInvoice,
  deleteClient,
  deleteInvoice,
  updateClientSQL,
  updateInvoiceSQL,
  updateUserSQL,
} from "./data";
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

    const task_title = formData.get("title") as string;

    await createInvoice({
      user_email,
      status,
      invoice_date,
      due_date,
      client_email,
      total_amount,
      task_title,
    });
    return "Invoice created successfully.";
  } catch (error) {
    console.error("createNewInvoice error:", error);
    return "Error creating invoice. Try again.";
  }
}

export async function updateClient(
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
    const company_name = formData.get("clientCompanyName") as string;
    const id = formData.get("clientID") as string;

    await updateClientSQL({
      user_email,
      name,
      email,
      company_name,
      id,
    });
    return "Client updated successfully.";
  } catch (error) {
    console.error("updateClient error:", error);
    return "Error updating client. Try again.";
  }
}

export async function updateInvoice(
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

    const task_title = formData.get("title") as string;

    const invoiceID = formData.get("rawInvoiceID") as string;

    await updateInvoiceSQL(invoiceID, {
      user_email,
      status,
      invoice_date,
      due_date,
      client_email,
      total_amount,
      task_title,
    });
    return "Invoice updated successfully.";
  } catch (error) {
    console.error("updateInvoice error:", error);
    return "Error updating invoice. Try again.";
  }
}

export async function updateUser(
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
    const email = session.user.email;

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const company = formData.get("company") as string;

    await updateUserSQL({
      email,
      firstName,
      lastName,
      company,
    });
    return "User updated successfully.";
  } catch (error) {
    console.error("updateUser error:", error);
    return "Error updating user. Try again.";
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

export async function deleteInvoiceAction(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const id = formData.get("invoiceID") as string;
    await deleteInvoice(id);
    return "Invoice Deleted Successfully";
  } catch (error) {
    console.error("DeleteInvoice error:", error);
    return "Error deleting invoice. Try again";
  }
}

export async function deleteClientAction(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const id = formData.get("clientID") as string;
    await deleteClient(id);
    return "Client Deleted Successfully";
  } catch (error) {
    console.error("DeleteClient error:", error);
    return "Error deleting client. Try again";
  }
}
