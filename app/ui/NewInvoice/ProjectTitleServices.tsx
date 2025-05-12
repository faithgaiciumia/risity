"use client";
import { Suspense } from "react";
import { poppins } from "../fonts";
import ServicesSelect from "./ServicesSelect";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProjectTitleServices({register}:{register:any}) {
  const [amount, setAmount] = useState(0);
  
  return (
    <>
      {/* task title */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Task Title
          </label>
        </div>
        <div>
          <input
            type="text"
            required
            {...register("title")}
            name="title"
            placeholder="eg. Baraka Website"
            className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          />
        </div>
      </div>
      {/* service name, desc, and amount */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Client
          </label>
        </div>
        <div>
          <Suspense>
            <ServicesSelect amount={amount} setAmount={setAmount} register={register}/>
          </Suspense>
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
            defaultValue={amount}
            {...register("amount")}
            name="amount"
            required
            placeholder="2,000"
            className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          />
        </div>
      </div>
    </>
  );
}
