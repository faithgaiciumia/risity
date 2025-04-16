import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
async function createInvoice(data: {
  userEmail: string;
  amount: number;
  status: string;
  invoiceDate: Date;
  clientEmail: string;
  clientName: string;
}) {
  prisma.invoices.create({ data });
}
