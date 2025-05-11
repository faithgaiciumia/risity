import { BiCalculator } from "react-icons/bi";
import { poppins } from "../fonts";
import Link from "next/link";
import LightDarkModeToggle from "./LightDarkModeToggle";
import LogoutButton from "../Landing/LogoutButton";
import { FaPlus } from "react-icons/fa6";
import UserProfile from "../Landing/UserProfile";
import { SidebarTrigger } from "@/components/ui/sidebar";
import AddNewBtn from "./AddNewBtn";

export default function DashNav() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-4 items-center">
            <SidebarTrigger />
            {/* divider */}
            <div className="h-6 border-l border-gray-300 dark:border-gray-600"></div>
            <Link href={"/dashboard"} className="hover:underline">
              <div className="flex items-center space-x-2">
                <BiCalculator className="text-green-500 text-lg md:text-2xl" />
                <h1
                  className={`${poppins.className} text-xl font-semibold text-gray-800 dark:text-white hidden md:inline`}
                >
                  Risity
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex space-x-2">
            <AddNewBtn />
            <LightDarkModeToggle />
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
