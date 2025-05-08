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
    <form className="space-y-3" action={formAction}>
      <ToastContainer />
      <div className="mx-4">
        {/* service name */}
        <div>
          <div>
            <label className={`mb-4 font-bold ${poppins.className} text-sm`}>
              Service Name
            </label>
          </div>
          <div>
            <input
              type="text"
              required
              name="serviceName"
              placeholder="eg. Website Development"
              className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
            />
          </div>
        </div>
        {/* service descriptio */}
        <div>
          <div>
            <label className={`mb-4 font-bold ${poppins.className} text-sm`}>
              Service Description (optional)
            </label>
          </div>
          <div>
            <input
              type="text"
              name="serviceDescription"
              placeholder="eg. Develop website from designs"
              className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
            />
          </div>
        </div>
        {/* service price */}
        <div>
          <div>
            <label className={`mb-4 font-bold ${poppins.className} text-sm`}>
              Service Price
            </label>
          </div>
          <div>
            <input
              type="number"
              required
              name="servicePrice"
              placeholder="eg. 10000"
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
