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
          <div className="col-span-2 flex items-center gap-4">
            {/* client profile circle */}
            <div className="bg-blue-600 w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
              <p className={`${poppins.className} text-sm text-white`}>
                {name?.charAt(0).toUpperCase() ?? ""}
              </p>
            </div>
            {/* client name */}
            <p
              className={`text-sm font-semibold text-gray-800 dark:text-white ${poppins.className}`}
            >
              {name}
            </p>
          </div>

          {/* Client Email */}
          <p
            className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${poppins.className} col-span-2 break-words`}
          >
            {email}
          </p>

          {/* client company */}
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className} col-span-2`}
          >
            {companyName || "No company added yet."}
          </p>
        </div>
      )}
    </>
  );
}
