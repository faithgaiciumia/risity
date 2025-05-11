import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { workSans } from "../fonts";
import { FaUser, FaUserCheck, FaUserNinja } from "react-icons/fa6";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
export default function UserProfile() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
         title="Profile" className={`${workSans.className} flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm `}
        >
          <FaUser />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={workSans.className}>
          <DropdownMenuLabel>Profile Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex items-center gap-2">
              <FaUserNinja /> Your Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
