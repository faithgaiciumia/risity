"use server";
import { auth } from "@/auth";
import { neon } from "@neondatabase/serverless";
import { Client } from "./definitions";

// Initialize Neon SQL client
const sql = neon(process.env.DATABASE_URL!);

export async function createInvoice(data: {
  user_email: string;
  status: string;
  invoice_date: Date;
  due_date: Date;
  client_email: string;
  total_amount: number;
  task_title:string;
}) {
  const result = await sql`
    INSERT INTO invoices (
      user_email,      
      status,
      invoice_date,
      due_date,
      client_email,
      total_amount,
      task_title
    )
    VALUES (
      ${data.user_email},      
      ${data.status},
      ${data.invoice_date},
      ${data.due_date},
      ${data.client_email},
      ${data.total_amount},
      ${data.task_title}
    )
    RETURNING *;
  `;

  return result[0]; // Returns the inserted invoice
}

export async function getInvoices(limit?: number) {
  //get email
  const session = await auth();
  if (!session || !session.user?.email) {
    throw new Error("User is not logged in");
  }
  const user_email = session.user.email;
  const result =
    await sql`SELECT * FROM invoices WHERE user_email = ${user_email} ORDER BY invoice_date DESC ${
      limit ? sql`LIMIT ${limit}` : sql``
    }`;
  return result;
}

export async function getStatsOverviewData() {
  try {
    const avgResult =
      await sql`SELECT AVG(total_amount) AS average FROM invoices`;
    const sumResult =
      await sql`SELECT SUM(total_amount) AS total FROM invoices`;
    const clientCountResult =
      await sql`SELECT COUNT(*) AS total_clients FROM clients`;

    const monthlyAverageRevenue = avgResult[0]?.average ?? 0;
    const totalAmount = sumResult[0]?.total ?? 0;
    const totalClients = clientCountResult[0]?.total_clients ?? 0;

    return { monthlyAverageRevenue, totalAmount, totalClients };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

export async function getInvoiceById(id: string) {
  //get email
  const session = await auth();
  if (!session || !session.user?.email) {
    throw new Error("User is not logged in");
  }
  const user_email = session.user.email;

  const result =
    await sql`SELECT * FROM invoices WHERE id=${id} AND user_email=${user_email} LIMIT 1`;

  return result[0] ?? null;
}

export async function getClients(limit?: number) {
  //get email
  const session = await auth();
  if (!session || !session.user?.email) {
    throw new Error("User is not logged in");
  }
  const user_email = session.user.email;
  const result =
    await sql`SELECT * FROM clients WHERE user_email = ${user_email} ORDER BY name DESC ${
      limit ? sql`LIMIT ${limit}` : sql``
    }`;
  return result as Client[];
}

export async function createClient(data: {
  user_email: string;
  name: string;
  email: string;
}) {
  const result = await sql`
    INSERT INTO clients (
      user_email,
      name,
      email
    )
    VALUES (
      ${data.user_email},
      ${data.name},
      ${data.email}
    )
    RETURNING *;
  `;

  return result[0]; // Returns the inserted invoice
}
