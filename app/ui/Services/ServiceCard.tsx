"use client";
import { useViewStore } from "@/app/store/viewStore";
import { poppins } from "../fonts";

import ServiceCardGrid from "./ServiceCardGrid";
import ServiceEdit from "./ServiceEdit";
import ServiceDelete from "./ServiceDelete";

export default function ServiceCard({
  id,
  name,
  description,
  price,
}: {
  id: string;
  name: string;
  description: string;
  price: string;
}) {
  const { viewType } = useViewStore();

  return (
    <>
      {viewType === "grid" ? (
        <ServiceCardGrid
          id={id}
          name={name}
          description={description}
          price={price}
        />
      ) : (
        <div className="overflow-x-auto">
          <div className=" min-w-[800px] grid my-2 grid-cols-7 items-center justify-between gap-4 p-4 bg-white dark:bg-gray-900 shadow rounded-lg border border-gray-100 dark:border-gray-700  w-full">
            <div className="col-span-2 flex items-center gap-4">
              {/* client profile circle */}
              <div className="bg-purple-600 w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
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
              {price}
            </p>

            {/* client company */}
            <p
              className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className} col-span-2`}
            >
              {description || "No description added yet."}
            </p>
            {/* edit/delete buttons */}
            <div className="flex gap-2 justify-end col-span-1">
              <ServiceEdit
                id={id}
                name={name}
                description={description}
                price={price}
              />
              <ServiceDelete id={id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
