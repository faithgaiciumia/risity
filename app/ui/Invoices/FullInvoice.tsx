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
  rawTotalAmount,
  invoiceServices,
  clientName,
  userName
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
  rawTotalAmount: number;
  invoiceServices:any[];
  clientName:string;
  userName:string;
}) {
  //state to toggle between edit and save mode
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="p-2">
        <FullInvoiceHeader
          invoiceID={rawInvoiceID}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
      </div>
      <div>
        {isEditing ? (
          <EditInvoiceForm
            setIsEditing={setIsEditing}
            rawInvoiceID={rawInvoiceID}
            dateIssued={dateIssued}
            invoiceID={invoiceID}
            status={status}
            dueDate={dueDate}
            taskTitle={taskTitle}
            userEmail={userEmail}
            clientEmail={clientEmail}
            totalAmount={totalAmount}
            rawTotalAmount={rawTotalAmount}
            clientName={clientName}
            userName={userName}
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
            invoiceServices={invoiceServices}
            rawTotalAmount={rawTotalAmount}
            clientName={clientName}
            userName={userName}
          />
        )}
      </div>
    </>
  );
}
