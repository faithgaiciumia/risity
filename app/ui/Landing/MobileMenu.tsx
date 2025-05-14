"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { poppins } from "../fonts";
import { Key } from "lucide-react";
import { FaGithub, FaToolbox } from "react-icons/fa6";

export default function MobileMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BiMenu className="text-2xl text-green-600" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="space-y-2">
          <DropdownMenuLabel className={`text-sm ${poppins.className}`}>
            Menu
          </DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <Link href="#features" className="flex py-2 gap-2 items-center hover:text-green-500 text-sm">
             <FaToolbox/> Features
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="https://github.com/your-repo"
              target="_blank"
              className="hover:text-green-500 py-2 text-sm flex items-center gap-2"
            >
              <FaGithub/> View Source
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
