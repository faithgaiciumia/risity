"use client";
import { FaSpinner } from "react-icons/fa6";
import { poppins } from "../fonts";
import { useActionState } from "react";
import { createNewInvoice } from "@/app/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function NewInvoiceForm() {
  const [message, formAction, isPending] = useActionState(
    createNewInvoice,
    undefined
  );
  // listen for a message from the action
  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);
  return (
    <form className="space-y-3" action={formAction}>
      <ToastContainer />
      {/* client name input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Client Name
          </label>
        </div>
        <div>
          <input
            type="text"
            required
            name="clientName"
            placeholder="Tom Baraka"
            className={`w-full border px-2 py-4 mt-2 border-gray-700 text-sm ${poppins.className}`}
          />
        </div>
      </div>
      {/* client email input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Client Email
          </label>
        </div>
        <div>
          <input
            type="email"
            required
            name="clientEmail"
            placeholder="client@example.com"
            className={`w-full border px-2 py-4 mt-2 border-gray-700 text-sm ${poppins.className}`}
          />
        </div>
      </div>
      {/* invoice amount input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Amount
          </label>
        </div>
        <div>
          <input
            type="text"
            name="amount"
            required
            placeholder="2,000"
            className={`w-full border px-2 py-4 mt-2 border-gray-700 text-sm ${poppins.className}`}
          />
        </div>
      </div>
      {/* invoice status input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Invoice Status
          </label>
        </div>
        <div>
          <select
            required
            name="status"
            className={`w-full border px-2 py-4 mt-2 border-gray-700 text-sm ${poppins.className}`}
            defaultValue={""}
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
      </div>
      {/* invoice date input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>Date</label>
        </div>
        <div>
          <input
            type="date"
            name="date"
            required
            defaultValue={new Date().toISOString().split("T")[0]}
            className={`w-full border px-2 py-4 mt-2 border-gray-700 text-sm ${poppins.className}`}
          />
        </div>
      </div>
      {/* create button */}
      <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={isPending}
          className="mt-6 w-[300px] flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-green-600 text-white px-6 py-4 text-sm font-medium shadow-sm hover:bg-green-900 hover:text-white transition"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <FaSpinner className="animate-spin" /> Creating ...
            </span>
          ) : (
            "Create"
          )}
        </button>
      </div>
    </form>
  );
}
