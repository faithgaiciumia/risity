import { FaList } from "react-icons/fa6";
import DashNav from "../ui/Dashboard/DashNav";
import { poppins, workSans } from "../ui/fonts";
import { FaThLarge } from "react-icons/fa";
import InvoiceHeader from "../ui/Invoices/InvoiceHeader";
import InvoiceCard from "../ui/Invoices/InvoiceCard";
import { getInvoices } from "../lib/data";

export default async function Invoices() {
  const invoices = await getInvoices(10);
  
  return (
    <>
      <DashNav />
      <InvoiceHeader />
      <div className="space-y-2 p-4">
        {/* invoice cards */}
        {invoices.length === 0 ? (
          <p>You have no invoices yet.</p>
        ) : (
          invoices.map((invoice, index) => (
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
