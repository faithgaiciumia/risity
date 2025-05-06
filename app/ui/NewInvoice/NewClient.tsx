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
  // listen for a message from the action
  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);
  return (
    <form className="space-y-3" action={formAction}>
      <ToastContainer />
      <div className="mx-4">
        {/* client name */}
        <div>
          <div>
            <label className={`mb-4 font-bold ${poppins.className} text-sm`}>
              Client Name
            </label>
          </div>
          <div>
            <input
              type="text"
              required
              name="clientName"
              placeholder="eg. Tom Baraka"
              className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
            />
          </div>
        </div>
        {/* client email */}
        <div>
          <div>
            <label className={`mb-4 font-bold ${poppins.className} text-sm`}>
              Client Email
            </label>
          </div>
          <div>
            <input
              type="email"
              required
              name="clientEmail"
              placeholder="eg. baraka@gmail.com"
              className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            disabled={isPending}
            className="mt-2 border bg-green-400 text-white px-2 py-2 rounded text-sm"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <FaSpinner className="animate-spin" /> Saving ...
              </span>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
