"use client";
import { useViewStore } from "@/app/store/viewStore";
import { poppins } from "../fonts";
import ClientCardGrid from "./ClientCardGrid";

export default function ClientCard({
  id,
  name,
  email,
  companyName,
}: {
  id: string;
  name: string;
  email: string;
  companyName: string;
}) {
  const { viewType } = useViewStore();

  return (
    <>
      {viewType === "grid" ? (
        <ClientCardGrid
          id={id}
          name={name}
          email={email}
          companyName={companyName}
        />
      ) : (
        <div className="grid my-2 grid-cols-6 items-center justify-between gap-4 p-4 bg-white dark:bg-gray-900 shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-600 hover:scale-[1.02] transition-transform duration-200 ease-in-out cursor-pointer w-full">
          {/* Invoice ID */}
          <p
            className={`text-sm font-semibold text-gray-800 dark:text-white ${poppins.className} col-span-1`}
          >
            {companyName}
          </p>

          {/* Client Email */}
          <p
            className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className} col-span-1 break-words`}
          >
            {email}
          </p>

          {/* Project Title */}
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className} col-span-1`}
          >
            {name}
          </p>

          
        </div>
      )}
    </>
  );
}
