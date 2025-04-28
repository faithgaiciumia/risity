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
    <div className="h-full my-2 p-4 bg-white dark:bg-gray-900 shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-600 hover:scale=[1/02] transition-transform duration-200 ease-in-out cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <StatusBadge status={status} />
        </div>
        <div>
          <p
            className={`text-sm font-semibold text-gray-800 dark:text-white ${poppins.className}`}
          >
            {formatter.format(totalAmount)}
          </p>
        </div>
      </div>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      <div className="my-4 space-y-4">
        {/* Project Title */}
        <div>
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}
          >
            {taskTitle}
          </p>
        </div>
        {/* project id */}
        <div>
          <p
            className={`text-md font-semibold text-gray-800 dark:text-white ${poppins.className}`}
          >
            {formattedID}
          </p>
        </div>
        {/* client email and date */}
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className}  break-words`}
            >
              {clientEmail}
            </p>
          </div>
          <div>
            <p
              className={` text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}
            >
              {new Date(invoiceDate).toLocaleString("en-KE", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
