import DashNav from "../ui/Dashboard/DashNav";
import { poppins, workSans } from "../ui/fonts";
import InvoiceHeader from "../ui/Invoices/InvoiceHeader";
import InvoiceCard from "../ui/Invoices/InvoiceCard";
import { getInvoices } from "../lib/data";

// Server Component with searchParams support
export default async function Invoices({
  searchParams,
}: {
  searchParams?: { status?: string };
}) {
  // Determine selected status or default to "all"
  const status = searchParams?.status?.toLowerCase() || "all";

  // Fetch all invoices
  const invoices = await getInvoices(10);

  // Filter invoices based on selected status
  const filteredInvoices = invoices.filter((invoice) => {
    if (status === "all") return true;
    return invoice.status.toLowerCase() === status;
  });

  return (
    <>
      <DashNav />
      <InvoiceHeader />
      <div className="space-y-2 p-4">
        {filteredInvoices.length === 0 ? (
          <p className={workSans.className}>
            You have no <strong>{status}</strong> invoices yet.
          </p>
        ) : (
          filteredInvoices.map((invoice, index) => (
            <InvoiceCard
              key={index}
              clientName={invoice.client_name}
              invoiceDate={invoice.invoice_date}
              amount={invoice.amount}
              status={invoice.status}
              id={invoice.id}
            />
          ))
        )}
      </div>
    </>
  );
}
