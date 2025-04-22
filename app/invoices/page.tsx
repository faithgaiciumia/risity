import DashNav from "../ui/Dashboard/DashNav";
import { poppins, workSans } from "../ui/fonts";
import InvoiceHeader from "../ui/Invoices/InvoiceHeader";
import InvoiceCard from "../ui/Invoices/InvoiceCard";
import { getInvoices } from "../lib/data";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

// Server Component with searchParams support
export default async function Invoices({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string }>;
}) {
  // Determine selected status or default to "all"
  const status = (await searchParams)?.status?.toLowerCase() || "all";

  // Fetch all invoices
  const invoices = await getInvoices(10);

  // Filter invoices based on selected status
  const filteredInvoices = invoices.filter((invoice) => {
    if (status === "all") return true;
    return invoice.status.toLowerCase() === status;
  });

  return (
    <Suspense fallback={<Loading/>}>
      <DashNav />
      <InvoiceHeader />
      <div className="space-y-2 p-4">
        {filteredInvoices.length === 0 ? (
          <p className={workSans.className}>
            You have no <strong>{status}</strong> invoices yet.
          </p>
        ) : (
          filteredInvoices.map((invoice, index) => (
            <Link key={index} href={`/invoices/${invoice.id}`}>
            <InvoiceCard
              key={index}
              clientEmail={invoice.client_email}
              invoiceDate={invoice.invoice_date}
              totalAmount={invoice.total_amount}
              status={invoice.status}
              id={invoice.id}
              taskTitle={invoice.task_title}
            />
            </Link>
          ))
        )}
      </div>
    </Suspense>
  );
}
