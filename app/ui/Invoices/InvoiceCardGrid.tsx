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
    <div className="min-h-[180px] h-full flex flex-col justify-between p-4 bg-white dark:bg-gray-900 shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-600 hover:scale-[1.02] transition-transform duration-200 ease-in-out cursor-pointer">
      <div className="flex items-center justify-between">
        <StatusBadge status={status} />
        <p className={`text-sm font-semibold text-gray-800 dark:text-white ${poppins.className}`}>
          {formatter.format(totalAmount)}
        </p>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      <div className="space-y-4">
        <p className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}>
          {taskTitle}
        </p>
        <p className={`text-md font-semibold text-gray-800 dark:text-white ${poppins.className}`}>
          {formattedID}
        </p>

        <div className="flex items-center justify-between">
          <p className={`text-sm font-semibold text-gray-700 dark:text-gray-300 break-words ${poppins.className}`}>
            {clientEmail}
          </p>
          <p className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}>
            {new Date(invoiceDate).toLocaleString("en-KE", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
