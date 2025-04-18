import Link from "next/link";
import { workSans } from "../fonts";
import Recent from "./Recent";
import { getInvoices } from "@/app/lib/data";

export default async function RecentInvoices() {
  const invoices = await getInvoices(3);
  return (
    <div className="bg-white border border-gray-300 p-4 w-full md:w-1/2">
      {/* header */}
      <div className="flex items-center justify-between">
        <h1 className={`text-md font-bold ${workSans.className}`}>
          Recent Invoices
        </h1>
        <Link href="/invoices" className="hover:underline text-green-600">
          <span className={`text-md font-bold ${workSans.className}`}>
            View all invoices
          </span>
        </Link>
      </div>
      {/* recents list */}
      {invoices.map((invoice, index) => (
        <Recent
          key={index}
          invoice_date={invoice.invoice_date}
          client_name={invoice.client_name}
        />
      ))}
    </div>
  );
}
