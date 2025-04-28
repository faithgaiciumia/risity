import { FaPen, FaTrash, FaFilePdf, FaShare } from "react-icons/fa6";
import { poppins, workSans } from "../fonts";
import Link from "next/link";

export default function FullInvoiceHeader() {
  const invoiceID = "cc4207d8-7476-4f80-89a1-e569e4975da4";
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-white dark:bg-gray-900 rounded-md shadow-sm">
      {/* heading */}
      <div>
        <h1
          className={`${poppins.className} text-lg font-semibold text-gray-800 dark:text-white`}
        >
          Full Invoice
        </h1>
      </div>

      {/* action buttons */}
      <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
        {/* User actions */}
        <button
          className={`${workSans.className} flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm`}
        >
          <FaFilePdf /> Pdf
        </button>
        <button
          className={`${workSans.className} flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm`}
        >
          <FaShare /> Share
        </button>

        {/* CRUD actions */}
        <Link href={`/invoices/${invoiceID}/edit`}>
          <button
            className={`${workSans.className} flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm`}
          >
            <FaPen /> Edit
          </button>
        </Link>
        <button
          className={`${workSans.className} flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm`}
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}
