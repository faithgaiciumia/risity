import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { poppins, workSans } from "../fonts";
import { FaChevronDown, FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { BookCheck, FileText, Users } from "lucide-react";

export default function AddNewBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
      title="Create New"
        className={`${poppins.className} flex items-center gap-2 font-bold text-sm px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition`}
      >
       <FaPlus className="md:hidden"/> <span className="hidden md:inline">New</span> <FaChevronDown className="hidden md:inline"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={workSans.className}>
        <DropdownMenuLabel>Create New: </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/invoices/new"} className="flex items-center gap-2">
            <FileText /> Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/clients/new"} className="flex items-center gap-2">
            <Users /> Client
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/services/new"} className="flex items-center gap-2">
            <BookCheck /> Service
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
