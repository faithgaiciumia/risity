import Link from "next/link";
import { workSans } from "../fonts";

export default function RecentInvoices() {
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
      <div className="my-2">
        <p className="text-sm">
          <span className="font-bold">2 days ago </span>- invoice created for
          Faith Gaiciumia
        </p>
      </div>
    </div>
  );
}
