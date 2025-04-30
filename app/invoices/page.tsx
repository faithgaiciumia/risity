import DashNav from "../ui/Dashboard/DashNav";
import InvoiceHeader from "../ui/Invoices/InvoiceHeader";
import { getInvoices } from "../lib/data";
import { Suspense } from "react";
import Loading from "./loading";
import InvoicesCardWrapper from "../ui/Invoices/InvoicesCardWrapper";

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
    <Suspense fallback={<Loading />}>
      <DashNav />
      <InvoiceHeader />
      {/* wrapper */}
      <InvoicesCardWrapper invoices={filteredInvoices} status={status}/>
    </Suspense>
  );
}
