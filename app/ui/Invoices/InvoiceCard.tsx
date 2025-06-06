"use client";
import { useViewStore } from "@/app/store/viewStore";
import { poppins } from "../fonts";
import StatusBadge from "./StatusBadge";
import InvoiceCardGrid from "./InvoiceCardGrid";

export default function InvoiceCard({
  clientEmail,
  invoiceDate,
  totalAmount,
  status,
  id,
  taskTitle,
}: {
  clientEmail: string;
  invoiceDate: string;
  totalAmount: number;
  status: string;
  id: string;
  taskTitle: string;
}) {
  // function to format the currency amounts
  const formatter = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  });

  // creating a more readable invoice id
  const formattedID = `INV-${new Date(invoiceDate)
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")}-${id.slice(0, 4)}`;

  const { viewType } = useViewStore();

  return (
    <>
      {viewType === "grid" ? (
          <InvoiceCardGrid
          clientEmail={clientEmail}
          invoiceDate={invoiceDate}
          totalAmount={totalAmount}
          status={status}
          id={id}
          taskTitle={taskTitle}
        />
      ) : (
        <div className="overflow-x-auto">
          <div className="min-w-[800px] grid my-2 grid-cols-15 items-center justify-between gap-4 p-4 bg-white dark:bg-gray-900 shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-600 hover:scale-[1.02] transition-transform duration-200 ease-in-out cursor-pointer w-full">
          {/* Invoice ID */}
          <p
            className={`text-sm font-semibold text-gray-800 dark:text-white ${poppins.className} col-span-3`}
          >
            {formattedID}
          </p>

          {/* Client Email */}
          <p
            className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className} col-span-3 break-words`}
          >
            {clientEmail}
          </p>

          {/* Project Title */}
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className} col-span-2`}
          >
            {taskTitle}
          </p>

          {/* Status Badge */}
          <div className="col-span-2">
            <StatusBadge status={status} />
          </div>

          {/* Invoice Date */}
          <p
            className={`col-span-3 text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}
          >
            {new Date(invoiceDate).toLocaleString("en-KE", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>

          {/* Amount */}
          <p
            className={`col-span-2 text-sm font-semibold text-gray-800 dark:text-white ${poppins.className}`}
          >
            {formatter.format(totalAmount)}
          </p>
        </div>
        </div>
      )}
    </>
  );
}
