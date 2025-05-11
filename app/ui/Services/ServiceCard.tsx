"use client";
import { useViewStore } from "@/app/store/viewStore";
import { poppins } from "../fonts";

import ServiceCardGrid from "./ServiceCardGrid";
import ServiceEdit from "./ServiceEdit";
import ServiceDelete from "./ServiceDelete";
import { formatAmount } from "@/app/lib/helpers";

export default function ServiceCard({
  id,
  name,
  description,
  price,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
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
          <div className="min-w-[800px] grid grid-cols-7 items-center gap-4 px-6 py-4 my-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:border-green-600 transition duration-200">
            
            {/* Name */}
            <div className="col-span-2">
              <p className={`text-base font-semibold text-gray-900 dark:text-white ${poppins.className}`}>
                {name}
              </p>
            </div>

            {/* Price */}
            <p className={`col-span-1 text-sm font-medium text-gray-800 dark:text-gray-300 ${poppins.className}`}>
              {formatAmount(price)}
            </p>

            {/* Description */}
            <p className={`col-span-3 text-sm text-gray-600 dark:text-gray-400 truncate ${poppins.className}`}>
              {description || "No description added yet."}
            </p>

            {/* Actions */}
            <div className="col-span-1 flex justify-end gap-2">
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
