"use client";
import { FaSpinner } from "react-icons/fa6";
import { poppins } from "../fonts";
import { useActionState, useState, useEffect, Suspense } from "react";
import { createNewInvoice } from "@/app/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ClientsSelect from "./ClientsSelect";
import ServicesSelect from "./ServicesSelect";

export default function NewInvoiceForm() {
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  // Capture form values
  const { register, handleSubmit } = useForm({ shouldUnregister: false });

  const [message, formAction, isPending] = useActionState(
    createNewInvoice,
    undefined
  );

  useEffect(() => {
    if (message === "Invoice created successfully.") {
      toast.success(message);
      setTimeout(() => {
        router.push("/invoices");
      }, 1000);
    } else if (message) {
      toast.error(message);
    }
  }, [message]);

  return (
    <form className="space-y-6" action={formAction}>
      <ToastContainer />

      {/* === Project Title + Service Selection === */}
      <div>
        <label className={`mb-2 font-bold ${poppins.className}`}>
          Task Title
        </label>
        <input
          type="text"
          {...register("title")}
          placeholder="eg. Baraka Website"
          className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          required
        />
      </div>

      <div>
        <label className={`mb-2 font-bold ${poppins.className}`}>Service</label>
        <Suspense>
          <ServicesSelect
            amount={amount}
            setAmount={setAmount}
            register={register}
          />
        </Suspense>
      </div>

      <div>
        <label className={`mb-2 font-bold ${poppins.className}`}>Amount</label>
        <input
          type="text"
          defaultValue={amount}
          {...register("amount")}
          placeholder="2,000"
          className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          required
        />
      </div>

      {/* === Client Details === */}
      <div>
        <label className={`mb-2 font-bold ${poppins.className}`}>Client</label>
        <Suspense>
          <ClientsSelect register={register} />
        </Suspense>
      </div>

      {/* === Invoice Due Dates === */}
      <div>
        <label className={`mb-2 font-bold ${poppins.className}`}>
          Invoice Status
        </label>
        <select
          {...register("status")}
          className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select status
          </option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Overdue">Overdue</option>
        </select>
      </div>

      <div>
        <label className={`mb-2 font-bold ${poppins.className}`}>Date</label>
        <input
          type="date"
          {...register("invoiceDate")}
          defaultValue={new Date().toISOString().split("T")[0]}
          className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          required
        />
      </div>

      <div>
        <label className={`mb-2 font-bold ${poppins.className}`}>
          Due Date
        </label>
        <input
          type="date"
          {...register("dueDate")}
          className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          required
        />
      </div>

      {/* === Submit Button === */}
      <div className="flex justify-center mt-6">
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
            "Create Invoice"
          )}
        </button>
      </div>
    </form>
  );
}
