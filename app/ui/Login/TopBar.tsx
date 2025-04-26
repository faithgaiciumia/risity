import { BiCalculator } from "react-icons/bi";
import { poppins } from "../fonts";
import Link from "next/link";
import LightDarkModeToggle from "../Dashboard/LightDarkModeToggle";

export default function TopBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link href={"/"} className="hover:underline">
          <div className="flex items-center space-x-2">
            <BiCalculator className="text-green-500 text-2xl" />
            <h1 className={`${poppins.className} text-xl font-semibold text-gray-900 dark:text-white`}>
              Risity
            </h1>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <LightDarkModeToggle />
          <Link href={"/login"}>
            <button
              className={`${poppins.className} font-bold text-sm text-gray-700 dark:text-gray-300 hover:underline`}
            >
              Log In
            </button>
          </Link>
          {/* <Link href={"/signup"}>
            <button
              className={`${poppins.className} font-bold text-sm text-gray-700 dark:text-gray-300 hover:underline`}
            >
              Sign Up
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
