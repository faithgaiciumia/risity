"use client";
import { FaPen, FaTrash, FaFilePdf, FaShare } from "react-icons/fa6";
import { poppins, workSans } from "../fonts";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { deleteInvoiceAction } from "@/app/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
  const exportPDF = async () => {
    const input = document.getElementById("invoice-content");
    if (!input) {
      toast.error("Invoice not found");
      return;
    }
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`invoice-${invoiceID}.pdf`);
  };
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
          className={`${poppins.className} text-lg font-semibold text-gray-800 dark:text-white`}
        >
          Full Invoice
        </h1>
      </div>

      {/* action buttons */}
      <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
        {/* User actions */}
        <button
          disabled={isEditing}
          className={`${
            workSans.className
          } flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm ${
            isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
          }`}
        >
          <FaFilePdf /> Pdf
        </button>
        <button
          disabled={isEditing}
          onClick={exportPDF}
          className={`${
            workSans.className
          } flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm ${
            isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
          }`}
        >
          <FaShare /> Share
        </button>

        {/* CRUD actions */}
        <button
          disabled={isEditing}
          className={`${
            workSans.className
          } flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm ${
            isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
          }`}
          onClick={() => setIsEditing(true)}
        >
          <FaPen /> Edit
        </button>
        <form action={formAction}>
          <input name="invoiceID" type="hidden" defaultValue={invoiceID} />
          <button
            className={`${
              workSans.className
            } flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm ${
              isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
            }`}
          >
            <FaTrash /> {isPending ? "Deleting..." : "Delete"}
          </button>
        </form>
      </div>
    </div>
  );
}
