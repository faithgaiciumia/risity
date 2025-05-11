import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { poppins } from "../fonts";
import { FaEllipsisVertical } from "react-icons/fa6";
import ServiceEdit from "./ServiceEdit";
import ServiceDelete from "./ServiceDelete";
import { formatAmount } from "@/app/lib/helpers";

export default function ServiceCardGrid({
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
  return (
    <div className="min-h-[180px] flex flex-col justify-between p-5 bg-white dark:bg-gray-900 shadow rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Top section: name and menu */}
      <div className="flex items-start justify-between">
        <p
          className={`text-base font-semibold text-gray-900 dark:text-white ${poppins.className}`}
        >
          {name}
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-gray-500 hover:text-gray-700 dark:hover:text-white focus:outline-none">
            <FaEllipsisVertical className="text-lg" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="text-blue-600"
              onSelect={(e) => e.preventDefault()}
            >
              <ServiceEdit
                id={id}
                description={description}
                name={name}
                price={price}
              />{" "}
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600"
              onClick={(e) => e.preventDefault()}
            >
              <ServiceDelete id={id} /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <hr className="my-4 border-gray-200 dark:border-gray-700" />

      {/* Description and price */}
      <div className="space-y-3">
        <p
          className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}
        >
          {description}
        </p>
        <p
          className={`text-sm font-bold text-gray-800 dark:text-white ${poppins.className}`}
        >
          {formatAmount(price) ?? "No company added yet."}
        </p>
      </div>
    </div>
  );
}
