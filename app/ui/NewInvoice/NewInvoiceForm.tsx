"use client";
import { FaSpinner } from "react-icons/fa6";
import { poppins } from "../fonts";
import { Suspense, useActionState, useState } from "react";
import { createNewInvoice } from "@/app/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import ClientsSelect from "./ClientsSelect";
import { useRouter } from "next/navigation";
import ServicesSelect from "./ServicesSelect";
import ProjectTitleServices from "./ProjectTitleServices";
import InvoiceClientDetails from "./InvoiceClientDetails";
import InvoiceDueDates from "./InvoiceDueDates";
import { useForm } from "react-hook-form";

export default function NewInvoiceForm() {
  //manage step by step form
  const [step, setStep] = useState(0);
  //router for rerouting after successful delete
  const router = useRouter();
  //handle form submission
  const [message, formAction, isPending] = useActionState(
    createNewInvoice,
    undefined
  );
  

  // listen for a message from the action
  useEffect(() => {
    if (message === "Invoice created successfully.") {
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
    <form className="space-y-3" action={formAction}>
      <ToastContainer />
      {step === 0 && <ProjectTitleServices />}
      {step === 1 && <InvoiceClientDetails />}
      {step === 2 && <InvoiceDueDates />}

      {/*next, back, and save buttons */}
      <div className="flex justify-between mt-6">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-sm rounded hover:bg-gray-400"
          >
            Back
          </button>
        )}
        {step < 2 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev + 1)}
            className="px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-700"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={isPending}
            className="w-[300px] flex items-center justify-center gap-2 rounded-lg bg-green-600 text-white px-6 py-4 text-sm font-medium shadow-sm hover:bg-green-900 transition"
          >
            {isPending ? (
              <>
                <FaSpinner className="animate-spin" /> Creating ...
              </>
            ) : (
              "Create"
            )}
          </button>
        )}
      </div>
    </form>
  );
}
