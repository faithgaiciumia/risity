"use client";
import { useState } from "react";
import { poppins, workSans } from "../fonts";
import FullInvoiceHeader from "./FullInvoiceHeader";
import FullInvoiceSaved from "./FullInvoiceSaved";
import StatusBadge from "./StatusBadge";
import EditInvoiceForm from "./EditInvoiceForm";

export default function FullInvoice({
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
  //state to toggle between edit and save mode
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="p-2">
        <FullInvoiceHeader invoiceID={invoiceID} setIsEditing={setIsEditing} />
      </div>
      <div>
        {isEditing ? (
          <EditInvoiceForm
          rawInvoiceID={rawInvoiceID}
            dateIssued={dateIssued}
            invoiceID={invoiceID}
            status={status}
            dueDate={dueDate}
            taskTitle={taskTitle}
            userEmail={userEmail}
            clientEmail={clientEmail}
            totalAmount={totalAmount}
          />
        ) : (
          <FullInvoiceSaved
            dateIssued={dateIssued}
            invoiceID={invoiceID}
            status={status}
            dueDate={dueDate}
            taskTitle={taskTitle}
            userEmail={userEmail}
            clientEmail={clientEmail}
            totalAmount={totalAmount}
          />
        )}
      </div>
    </>
  );
}
