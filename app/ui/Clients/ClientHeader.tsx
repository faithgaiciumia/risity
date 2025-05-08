"use client";
import { poppins, workSans } from "../fonts";
import { useViewStore } from "@/app/store/viewStore";
import GridListToggle from "../Invoices/GridListToggle";
import { useEffect } from "react";

export default function ClientHeader() {
  //get view type - either list or grid
  const { viewType, setViewType } = useViewStore();
  //run the initialize view type on load
  const initializeViewType = useViewStore((state) => state.initializeViewType);

  useEffect(() => {
    initializeViewType();
  }, [initializeViewType]);
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
      {/* heading */}
      <div>
        <h1
          className={`${poppins.className} text-lg font-semibold text-gray-800 dark:text-white`}
        >
          Client
        </h1>
      </div>

      {/* toggle view buttons */}
      <GridListToggle viewType={viewType} setViewType={setViewType} />
    </div>
  );
}
