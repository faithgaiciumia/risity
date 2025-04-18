import { poppins } from "../fonts";

export default async function InvoiceCard({
  clientName,
  invoiceDate,
  amount,
  status,
  id,
}: {
  clientName: string;
  invoiceDate: string;
  amount: number;
  status: string;
  id: string;
}) {
  //function to format the currency amounts
  const formatter = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  });
  //   creating a more readable invoice id
  const formattedID = `INV-${new Date(invoiceDate)
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")}-${id.slice(0, 4)}`;

  return (
    <div className="grid grid-cols-6 items-center justify-between gap-4 p-4 bg-white shadow rounded-lg border border-gray-100">
      {/* Invoice ID */}
      <p className={`text-sm font-semibold ${poppins.className} col-span-1`}>
        INV-{formattedID}
      </p>

      {/* Client Name */}
      <p
        className={`text-sm font-semibold text-gray-700 ${poppins.className} col-span-1`}
      >
        {clientName}
      </p>

      {/* Project Title */}
      <p className={`text-sm text-gray-600 ${poppins.className} col-span-1`}>
        Website Redesign
      </p>

      {/* Status Badge */}
      <div className="col-span-1">
        <div className="w-[80px] text-center px-3 py-1 rounded-xl bg-red-100 text-red-600 border border-red-200 text-sm font-medium">
          {status}
        </div>
      </div>

      {/* Invoice Date */}
      <p className={`col-span-1 text-sm text-gray-600 ${poppins.className}`}>
        {new Date(invoiceDate).toLocaleString("en-KE", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>

      {/* Amount */}
      <p className={`col-span-1 text-sm font-semibold ${poppins.className}`}>
        {formatter.format(amount)}
      </p>
    </div>
  );
}
