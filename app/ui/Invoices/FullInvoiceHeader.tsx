"use client";
import { FaPen, FaTrash, FaShare, FaPrint, FaSpinner } from "react-icons/fa6";
import { poppins, workSans } from "../fonts";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { deleteInvoiceAction } from "@/app/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import InvoiceShareButton from "./InvoiceShareButton";

export default function FullInvoiceHeader({
  invoiceID,
  setIsEditing,
  isEditing,
}: {
  invoiceID: string;
  setIsEditing: (value: boolean) => void;
  isEditing: boolean;
}) {
  //router for rerouting after successful delete
  const router = useRouter();

  //handle form submission
  const [message, formAction, isPending] = useActionState(
    deleteInvoiceAction,
    undefined
  );
  //function to handle pdf export
  // const exportPDF = async () => {
  //   // const input = document.getElementById("invoice-content");
  //   // if (!input) {
  //   //   toast.error("Invoice not found");
  //   //   return;
  //   // }

  //   // const opt = {
  //   //   margin: 0,
  //   //   filename: `invoice-${invoiceID}.pdf`,
  //   //   image: { type: "jpeg", quality: 0.98 },
  //   //   html2canvas: { scale: 2 },
  //   //   jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  //   // };

  //   // await html2pdf().from(input).set(opt).save();
  //   const doc = new jsPDF();
  //   doc.html(document.getElementById("invoice-content")!, {
  //     callback: function (doc) {
  //       doc.save(`invoice-${invoiceID}.pdf`);
  //     },
  //   });
  // };

  // listen for a message from the action
  useEffect(() => {
    if (message === "Invoice Deleted Successfully") {
      toast.success(message);
      //redirect to invoices page after 10seconds
      setTimeout(() => {
        router.push("/invoices");
      }, 1000);
    } else if (message) {
      toast.error(message);
    }
  }, [message]);
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-white dark:bg-gray-900 rounded-md shadow-sm">
      <ToastContainer />
      {/* heading */}
      <div>
        <h1
          className={`${poppins.className} text-md md:text-lg font-semibold text-gray-800 dark:text-white`}
        >
          Full Invoice
        </h1>
      </div>

      {/* action buttons */}
      <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
        {/* User actions */}
        <button
        title="Print"
          disabled={isEditing}
          onClick={() => window.print()}
          className={`${
            workSans.className
          } flex items-center gap-1 px-4 py-2  border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm ${
            isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
          }`}
        >
          <FaPrint /> <span className="hidden md:inline">Print</span>
        </button>
        <InvoiceShareButton isEditing={isEditing} invoiceID={invoiceID} />

        {/* CRUD actions */}
        <button
        title="Edit"
          disabled={isEditing}
          className={`${
            workSans.className
          } flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm ${
            isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
          }`}
          onClick={() => setIsEditing(true)}
        >
          <FaPen /> <span className="hidden md:inline">Edit</span>
        </button>
        <form action={formAction}>
          <input name="invoiceID" type="hidden" defaultValue={invoiceID} />
          <button
          title="Delete"
            className={`${
              workSans.className
            } flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm ${
              isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
            }`}
          >
            {isPending ? <FaSpinner /> : <FaTrash />}
            <span className="hidden md:inline">
              {isPending ? "Deleting..." : "Delete"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
