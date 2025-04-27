"use client";

import { FaList, FaThLarge } from "react-icons/fa";
import { workSans } from "../fonts";

type ViewToggleProps = {
  viewType: "list" | "grid";
  setViewType: (view: "list" | "grid") => void;
};

export default function GridListToggle({
  viewType,
  setViewType,
}: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2 mt-4 md:mt-0">
      <button
        onClick={() => setViewType("list")}
        className={`${workSans.className} flex items-center gap-1 border ${
          viewType === "list"
            ? "border-green-400"
            : "border-gray-300 dark:border-gray-700"
        } px-3 py-1 rounded-md text-sm ${
          viewType === "list"
            ? "text-green-700"
            : "text-gray-700 dark:text-gray-300"
        } hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400`}
      >
        <FaList className="text-inherit" />
        List
      </button>
      <button
        onClick={() => setViewType("grid")}
        className={`${workSans.className} flex items-center gap-1 border ${
          viewType === "grid"
            ? "border-green-400"
            : "border-gray-300 dark:border-gray-700"
        } px-3 py-1 rounded-md text-sm ${
          viewType === "grid"
            ? "text-green-700"
            : "text-gray-700 dark:text-gray-300"
        } hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400`}
      >
        <FaThLarge className="text-inherit" />
        Grid
      </button>
    </div>
  );
}
