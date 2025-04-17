"use server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();
export async function createInvoice(data: {
  user_email: string;
  amount: number;
  status: string;
  invoice_date: Date;
  client_email: string;
  client_name: string;
}) {
  const newInvoice = await prisma.invoices.create({ data });
  return newInvoice;
}
