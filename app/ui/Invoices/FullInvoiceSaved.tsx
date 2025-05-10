import { poppins, workSans } from "../fonts";
import InvoiceService from "./InvoiceService";
import StatusBadge from "./StatusBadge";

export default function FullInvoiceSaved({
  dateIssued,
  invoiceID,
  status,
  dueDate,
  taskTitle,
  userEmail,
  clientEmail,
  totalAmount,
  invoiceServices,
}: {
  dateIssued: string;
  invoiceID: string;
  status: string;
  dueDate: string;
  taskTitle: string;
  userEmail: string;
  clientEmail: string;
  totalAmount: string;
  invoiceServices: any[];
}) {
  return (
    <div className="p-4 max-w-screen-md mx-auto" id="invoice-content">
      <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-100 dark:border-gray-700 space-y-4">
        {/* Status and Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-2">
          <StatusBadge status={status} />
          <p
            className={`text-sm font-semibold ${poppins.className} dark:text-white`}
          >
            {taskTitle}
          </p>
        </div>

        {/* Invoice Info */}
        <div className="flex flex-col md:flex-row justify-between gap-y-4">
          <div>
            <h1
              className={`text-xl font-bold ${poppins.className} dark:text-white`}
            >
              {invoiceID}
            </h1>
          </div>
          <div className="space-y-1">
            <h2
              className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className}`}
            >
              Date Issued
            </h2>
            <p
              className={`text-sm font-semibold ${workSans.className} dark:text-gray-400`}
            >
              {dateIssued}
            </p>
          </div>
          <div className="space-y-1">
            <h2
              className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className}`}
            >
              Due Date
            </h2>
            <p
              className={`text-sm font-semibold ${workSans.className} dark:text-gray-400`}
            >
              {dueDate}
            </p>
          </div>
        </div>

        <hr className="border-dotted border-t-2 border-gray-300 dark:border-gray-600 mb-4" />

        {/* From / To */}
        <div className="flex flex-col md:flex-row justify-between gap-y-6 my-6">
          <div>
            <p
              className={`text-sm text-gray-700 dark:text-gray-300 font-semibold mb-2 ${workSans.className}`}
            >
              FROM
            </p>
            <h2 className={`text-md ${poppins.className} dark:text-white`}>
              Faith Gaiciumia
            </h2>
            <p className={`text-sm ${workSans.className} dark:text-gray-400`}>
              {userEmail}
            </p>
          </div>
          <div>
            <p
              className={`text-sm text-gray-700 dark:text-gray-300 font-semibold mb-2 ${workSans.className}`}
            >
              TO
            </p>
            <h2 className={`text-md ${poppins.className} dark:text-white`}>
              Tom Baraka
            </h2>
            <p className={`text-sm ${workSans.className} dark:text-gray-400`}>
              {clientEmail}
            </p>
          </div>
        </div>

        {/* Service Header */}
        <hr className="dark:border-gray-600" />
        <div className="flex items-center justify-between mt-4">
          <h2
            className={`${poppins.className} text-sm font-bold text-gray-700 dark:text-gray-300`}
          >
            Service
          </h2>
          <h2
            className={`${poppins.className} text-sm font-bold text-gray-700 dark:text-gray-300`}
          >
            Total
          </h2>
        </div>

        <hr className="dark:border-gray-600" />

        {/* Services List */}
        <div className="space-y-2">
          {invoiceServices.map((invoiceService) => (
            <InvoiceService
              key={invoiceService.id}
              serviceName={invoiceService.name}
              serviceDescription={invoiceService.description}
              servicePrice={invoiceService.price}
            />
          ))}
        </div>

        {/* Totals */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h2
              className={`${workSans.className} text-sm font-semibold dark:text-gray-300`}
            >
              Sub-total
            </h2>
            <h2
              className={`${workSans.className} text-sm font-semibold dark:text-gray-300`}
            >
              Ksh. 25,000
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <h2
              className={`${workSans.className} text-sm font-semibold dark:text-gray-300`}
            >
              10% tax
            </h2>
            <h2
              className={`${workSans.className} text-sm font-semibold dark:text-gray-300`}
            >
              Ksh. 2,500
            </h2>
          </div>
        </div>

        {/* Total Section */}
        <div className="flex items-center justify-between bg-green-600 my-4 p-4 text-white rounded-md">
          <h2 className={`${poppins.className} text-md font-semibold`}>
            Total
          </h2>
          <h2 className={`${poppins.className} text-md font-semibold`}>
            {totalAmount}
          </h2>
        </div>
      </div>
    </div>
  );
}
