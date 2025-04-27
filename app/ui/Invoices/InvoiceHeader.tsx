"use client";
import { FaList } from "react-icons/fa6";
import { FaThLarge } from "react-icons/fa";
import { poppins, workSans } from "../fonts";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import GridListToggle from "./GridListToggle";

export default function InvoiceHeader() {
  //initialize view type - either list or grid
  const [viewType, setViewType] = useState<"list" | "grid">("list");
  // query param to change filters on click
  const searchParams = useSearchParams();
  const currentStatus = searchParams.get("status") || "all";
  const statuses = ["all", "paid", "pending", "overdue"];

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
      {/* heading */}
      <div>
        <h1
          className={`${poppins.className} text-lg font-semibold text-gray-800 dark:text-white`}
        >
          Invoices
        </h1>
      </div>

      {/* filters */}
      <div>
        <ul className="flex flex-wrap items-center gap-2 text-sm font-medium">
          {statuses.map((status) => (
            <li key={status}>
              <Link
                href={`/invoices?status=${status}`}
                className={`${
                  workSans.className
                } px-3 py-1 rounded-md hover:bg-green-100 dark:hover:bg-green-900 ${
                  currentStatus === status
                    ? "bg-green-200 text-green-800 dark:bg-green-700 dark:text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* toggle view buttons */}
      <GridListToggle viewType={viewType} setViewType={setViewType}/>
    </div>
  );
}
