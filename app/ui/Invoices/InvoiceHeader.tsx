"use client";
import { FaList } from "react-icons/fa6";
import { FaThLarge } from "react-icons/fa";
import { poppins, workSans } from "../fonts";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function InvoiceHeader() {
  // query param to change filters on click
  const searchParams = useSearchParams();
  const currentStatus = searchParams.get("status") || "all";
  const statuses = ["all", "paid", "pending", "overdue"];

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
      {/* heading */}
      <div>
        <h1 className={`${poppins.className} text-lg font-semibold text-gray-800 dark:text-white`}>
          Invoices
        </h1>
      </div>

      {/* filters */}
      <div>
        <ul className="flex flex-wrap items-center gap-2 text-sm font-medium">
          {statuses.map((status) => (
            <li key={status}>
              <Link
                href={`/invoices?status=${status}`}
                className={`${
                  workSans.className
                } px-3 py-1 rounded-md hover:bg-green-100 dark:hover:bg-green-900 ${
                  currentStatus === status
                    ? "bg-green-200 text-green-800 dark:bg-green-700 dark:text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* toggle view buttons */}
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <button
          className={`${workSans.className} flex items-center gap-1 border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400`}
        >
          <FaList className="text-gray-600 dark:text-gray-300" />
          List
        </button>
        <button
          className={`${workSans.className} flex items-center gap-1 border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400`}
        >
          <FaThLarge className="text-gray-600 dark:text-gray-300" />
          Grid
        </button>
      </div>
    </div>
  );
}
