import { poppins } from "../fonts";
import StatusBadge from "./StatusBadge";

export default async function InvoiceCard({
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

  return (
    <div className="grid my-2 grid-cols-6 items-center justify-between gap-4 p-4 bg-white dark:bg-gray-900 shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-600 hover:scale-[1.02] transition-transform duration-200 ease-in-out cursor-pointer">
      {/* Invoice ID */}
      <p className={`text-sm font-semibold text-gray-800 dark:text-white ${poppins.className} col-span-1`}>
        {formattedID}
      </p>

      {/* Client Email */}
      <p className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className} col-span-1 break-words`}>
        {clientEmail}
      </p>

      {/* Project Title */}
      <p className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className} col-span-1`}>
        {taskTitle}
      </p>

      {/* Status Badge */}
      <div className="col-span-1">
        <StatusBadge status={status} />
      </div>

      {/* Invoice Date */}
      <p className={`col-span-1 text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}>
        {new Date(invoiceDate).toLocaleString("en-KE", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>

      {/* Amount */}
      <p className={`col-span-1 text-sm font-semibold text-gray-800 dark:text-white ${poppins.className}`}>
        {formatter.format(totalAmount)}
      </p>
    </div>
  );
}
