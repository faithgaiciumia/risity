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
  
  
  export default function ServiceCardGrid({
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
    return (
      <div className="min-h-[180px] h-full flex flex-col justify-between p-4 bg-white dark:bg-gray-900 shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-600 hover:scale-[1.02] transition-transform duration-200 ease-in-out cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
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
          {/* edit, delete dropdown menu */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <FaEllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault(); // stops dropdown from closing
                  }}
                >
                  <ServiceEdit
                    id={id}
                    description={description}
                    name={name}
                    price={price}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault(); //prevent menu from closing onclick
                  }}
                >
                  <ServiceDelete id={id} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
  
        <hr className="my-4 border-gray-300 dark:border-gray-700" />
  
        <div className="space-y-4">
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}
          >
            {description}
          </p>
          <p
            className={`text-sm font-semibold text-gray-800 dark:text-white ${poppins.className}`}
          >
            {price ?? "No company added yet."}
          </p>
        </div>
      </div>
    );
  }
  