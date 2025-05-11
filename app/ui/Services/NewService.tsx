"use client";
import { poppins } from "../fonts";
import { useActionState, useEffect } from "react";
import { createNewService } from "@/app/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function NewService() {
  const router = useRouter();

  const [message, formAction, isPending] = useActionState(
    createNewService,
    undefined
  );
  // listen for a message from the action

  useEffect(() => {
    if (message === "Service created successfully.") {
      toast.success(message);
      //navigate to service list page
      router.push("/services");
    } else if (message) {
      toast.error(message);
    }
  }, [message]);
  return (
    <form className={`space-y-6 ${poppins.className}`} action={formAction}>
      <ToastContainer />
      <div className="mx-4 space-y-4">
        {/* Service Name */}
        <div>
          <label
            htmlFor="serviceName"
            className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300"
          >
            Service Name
          </label>
          <input
            type="text"
            required
            name="serviceName"
            id="serviceName"
            placeholder="e.g. Website Development"
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Service Description */}
        <div>
          <label
            htmlFor="serviceDescription"
            className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300"
          >
            Service Description{" "}
            <span className="text-gray-400 text-xs">(optional)</span>
          </label>
          <input
            type="text"
            name="serviceDescription"
            id="serviceDescription"
            placeholder="e.g. Develop website from designs"
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Service Price */}
        <div>
          <label
            htmlFor="servicePrice"
            className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300"
          >
            Service Price
          </label>
          <input
            type="number"
            required
            name="servicePrice"
            id="servicePrice"
            placeholder="e.g. 10000"
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            disabled={isPending}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm transition-colors duration-150 disabled:opacity-50 flex items-center gap-2"
          >
            {isPending ? (
              <>
                <FaSpinner className="animate-spin" /> Saving...
              </>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
