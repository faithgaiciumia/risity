// "use server";
// import { PrismaClient } from "@/generated/prisma";

// const prisma = new PrismaClient();
// export async function createInvoice(data: {
//   user_email: string;
//   amount: number;
//   status: string;
//   invoice_date: Date;
//   client_email: string;
//   client_name: string;
// }) {
//   const newInvoice = await prisma.invoices.create({ data });
//   return newInvoice;
// }

"use server";
import { neon } from "@neondatabase/serverless";

// Initialize Neon SQL client
const sql = neon(process.env.DATABASE_URL!);

export async function createInvoice(data: {
  user_email: string;
  amount: number;
  status: string;
  invoice_date: Date;
  client_email: string;
  client_name: string;
}) {
  const result = await sql`
    INSERT INTO invoices (
      user_email,
      amount,
      status,
      invoice_date,
      client_email,
      client_name
    )
    VALUES (
      ${data.user_email},
      ${data.amount},
      ${data.status},
      ${data.invoice_date},
      ${data.client_email},
      ${data.client_name}
    )
    RETURNING *;
  `;

  return result[0]; // Returns the inserted invoice
}
