import { poppins } from "../fonts";
import StatusBadge from "./StatusBadge";

export default function InvoiceCardGrid({
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
  const formatter = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  });

  const formattedID = `INV-${new Date(invoiceDate)
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")}-${id.slice(0, 4)}`;

  return (
    <div className="min-h-[200px] flex flex-col justify-between p-5 bg-white dark:bg-gray-900 shadow rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-600 hover:scale-[1.02] transition-transform duration-200 ease-in-out cursor-pointer">
      
      {/* Header: Status and Amount */}
      <div className="flex items-center justify-between">
        <StatusBadge status={status} />
        <p className={`text-md font-bold text-gray-900 dark:text-white ${poppins.className}`}>
          {formatter.format(totalAmount)}
        </p>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-200 dark:border-gray-700" />

      {/* Content: Title and Metadata */}
      <div className="space-y-2">
        {/* Task Title */}
        <p className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}>
          {taskTitle}
        </p>

        {/* Invoice ID */}
        <p className={`text-sm font-medium text-gray-800 dark:text-white ${poppins.className}`}>
          {formattedID}
        </p>

        {/* Client Email */}
        <p className={`text-sm text-gray-700 dark:text-gray-300 break-words ${poppins.className}`}>
          {clientEmail}
        </p>

        {/* Invoice Date */}
        <p className={`text-xs text-gray-500 dark:text-gray-400 ${poppins.className}`}>
          {new Date(invoiceDate).toLocaleDateString("en-KE", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
