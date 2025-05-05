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
export default function UserProfile() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${workSans.className} flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm `}
        >
          <FaUser />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={workSans.className}>
          <DropdownMenuLabel>Your Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <FaUserNinja/> Your Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
