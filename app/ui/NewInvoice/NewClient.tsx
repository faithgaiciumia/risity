"use client";
import { poppins } from "../fonts";
import { useActionState, useEffect } from "react";
import { createNewClient } from "@/app/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";

export default function NewClient() {
  const [message, formAction, isPending] = useActionState(
    createNewClient,
    undefined
  );

  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);

  return (
    <form className="w-full max-w-md mx-auto space-y-6 p-4 bg-white dark:bg-gray-900" action={formAction}>
      <ToastContainer />

      {/* Client Name */}
      <div>
        <label className={`block mb-2 font-semibold text-sm text-gray-700 dark:text-gray-200 ${poppins.className}`}>
          Client Name
        </label>
        <input
          type="text"
          name="clientName"
          required
          placeholder="e.g. Tom Baraka"
          className={`w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition ${poppins.className}`}
        />
      </div>

      {/* Client Email */}
      <div>
        <label className={`block mb-2 font-semibold text-sm text-gray-700 dark:text-gray-200 ${poppins.className}`}>
          Client Email
        </label>
        <input
          type="email"
          name="clientEmail"
          required
          placeholder="e.g. baraka@gmail.com"
          className={`w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition ${poppins.className}`}
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          disabled={isPending}
          className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-green-500 hover:bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isPending ? (
            <>
              <FaSpinner className="animate-spin" />
              Saving...
            </>
          ) : (
            "Save"
          )}
        </button>
      </div>
    </form>
  );
}
