import Link from "next/link";
import { workSans } from "../fonts";
import Recent from "./Recent";
import { getInvoices } from "@/app/lib/data";

export default async function RecentInvoices() {
  const invoices = await getInvoices(3);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-4 w-full md:w-1/2 rounded-lg shadow-sm">
      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className={`text-md font-bold ${workSans.className} text-gray-800 dark:text-white`}>
          Recent Invoices
        </h1>
        <Link href="/invoices" className="hover:underline text-green-600 dark:text-green-400">
          <span className={`text-md font-bold ${workSans.className}`}>
            View all invoices
          </span>
        </Link>
      </div>
      <hr className="border-gray-300 dark:border-gray-700" />
      
      {/* recents list */}
      {invoices.length === 0 ? (
        <p className="my-2 text-sm text-gray-500 dark:text-gray-400">
          You have no invoices yet.
        </p>
      ) : (
        invoices.map((invoice, index) => (
          <Recent
            key={index}
            invoice_date={invoice.invoice_date}
            client_email={invoice.client_email}
          />
        ))
      )}
    </div>
  );
}
