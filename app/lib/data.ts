import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();
export async function createInvoice(data: {
  userEmail: string;
  amount: number;
  status: string;
  invoiceDate: Date;
  clientEmail: string;
  clientName: string;
}) {
  //prisma.invoices.create({ data });
}
