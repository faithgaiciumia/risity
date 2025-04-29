"use client";
import { updateInvoice } from "@/app/lib/actions";
import { poppins, workSans } from "../fonts";
import StatusBadge from "./StatusBadge";
import { useActionState } from "react";

export default function EditInvoiceForm({
  rawInvoiceID,
  dateIssued,
  invoiceID,
  status,
  dueDate,
  taskTitle,
  userEmail,
  clientEmail,
  totalAmount,
}: {
  rawInvoiceID: string;
  dateIssued: string;
  invoiceID: string;
  status: string;
  dueDate: string;
  taskTitle: string;
  userEmail: string;
  clientEmail: string;
  totalAmount: string;
}) {
  //format dates into date format to display on inputs
  const formattedDateIssued = new Date(dateIssued).toISOString().split("T")[0];
  const formattedDueDate = new Date(dueDate).toISOString().split("T")[0];
  //use action state to handle form submission and feedback
  const [message, formAction, isPending] = useActionState(
    updateInvoice,
    undefined
  );

  return (
    <form action={formAction}>
      <div className="p-4 max-w-screen-md mx-auto">
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-100 dark:border-gray-700 space-y-4">
          {/* cancel and submit/save buttons */}
          <div className="flex justify-end space-x-2">
            <button type="button">Cancel</button>
            <button type="submit" disabled={isPending} className="rounded-lg border border-gray-300 dark:border-gray-500 bg-green-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-green-900 hover:text-white transition">
              {isPending ? "Saving..." : "Save"}
            </button>
          </div>
          {/* Status and Title */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-2">
            <StatusBadge status={status} />
            <input
              type="text"
              placeholder="Task Title"
              className={`text-sm font-semibold ${poppins.className} dark:text-white bg-transparent border-b border-gray-300 focus:outline-none`}
              defaultValue={taskTitle}
            />
          </div>

          {/* Invoice Info */}
          <div className="flex flex-col md:flex-row justify-between gap-y-4">
            <div>
              <h1
                className={`text-xl font-bold ${poppins.className} dark:text-white`}
              >
                {invoiceID}
              </h1>
              <input
                type="hidden"
                name="rawInvoiceID"
                defaultValue={rawInvoiceID}
              />
            </div>
            <div className="space-y-1">
              <h2
                className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className}`}
              >
                Date Issued
              </h2>
              <input
                type="date"
                name="invoiceDate"
                className="text-sm font-semibold bg-transparent border-b border-gray-300 focus:outline-none dark:text-white"
                defaultValue={formattedDateIssued}
              />
            </div>
            <div className="space-y-1">
              <h2
                className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className}`}
              >
                Due Date
              </h2>
              <input
                type="date"
                name="dueDate"
                className="text-sm font-semibold bg-transparent border-b border-gray-300 focus:outline-none dark:text-white"
                defaultValue={formattedDueDate}
              />
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
              <input
                type="email"
                placeholder="youremail@example.com"
                className="text-sm bg-transparent border-b border-gray-300 focus:outline-none dark:text-white"
                defaultValue={userEmail}
              />
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
              <input
                type="email"
                name="clientEmail"
                placeholder="clientemail@example.com"
                className="text-sm bg-transparent border-b border-gray-300 focus:outline-none dark:text-white"
                defaultValue={clientEmail}
              />
            </div>
          </div>

          {/* Service Section  */}
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
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Service Name"
                className="text-sm font-semibold bg-transparent border-b border-gray-300 focus:outline-none dark:text-white"
                defaultValue="Website Design"
                readOnly
              />
              <input
                type="text"
                placeholder="Service Amount"
                className="text-sm font-semibold bg-transparent border-b border-gray-300 focus:outline-none dark:text-white"
                defaultValue="Ksh 10,000"
                readOnly
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Service Name"
                className="text-sm font-semibold bg-transparent border-b border-gray-300 focus:outline-none dark:text-white"
                defaultValue="Website Hosting"
                readOnly
              />
              <input
                type="text"
                placeholder="Service Amount"
                className="text-sm font-semibold bg-transparent border-b border-gray-300 focus:outline-none dark:text-white"
                defaultValue="Ksh 15,000"
                readOnly
              />
            </div>
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

          {/* Total */}
          <div className="flex items-center justify-between bg-green-600 my-4 p-4 text-white rounded-md">
            <h2 className={`${poppins.className} text-md font-semibold`}>
              Total
            </h2>
            <input
              type="text"
              name="amount"
              className="text-md font-semibold bg-transparent focus:outline-none text-right"
              defaultValue={totalAmount}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
