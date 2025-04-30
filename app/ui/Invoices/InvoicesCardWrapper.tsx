"use client";

import { useViewStore } from "@/app/store/viewStore";
import { workSans } from "../fonts";
import Link from "next/link";
import InvoiceCard from "./InvoiceCard";
import { Invoice } from "@/app/lib/definitions";

export default function InvoicesCardWrapper({
  invoices,
  status,
}: {
  invoices: Record<string, any>[];
  status: string;
}) {
  const { viewType } = useViewStore();

  if (invoices.length === 0) {
    return (
      <p className={`p-4 ${workSans.className}`}>
        You have no <strong>{status}</strong> invoices yet.
      </p>
    );
  }

  return (
    <div
      className={`${
        viewType === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          : "flex flex-col gap-2"
      } p-4`}
    >
      {invoices.map((invoice) => (
        <Link key={invoice.id} href={`/invoices/${invoice.id}`}>
          <InvoiceCard
            clientEmail={invoice.client_email}
            invoiceDate={invoice.invoice_date}
            totalAmount={invoice.total_amount}
            status={invoice.status}
            id={invoice.id}
            taskTitle={invoice.task_title}
          />
        </Link>
      ))}
    </div>
  );
}
