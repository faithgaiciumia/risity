import { BiCalculator, BiMenu } from "react-icons/bi";
import { poppins } from "../fonts";
import Link from "next/link";
import { getSession } from "@/app/lib/getsession";
import LogoutButton from "./LogoutButton";
import MobileMenu from "./MobileMenu";
import LightDarkModeToggle from "../Dashboard/LightDarkModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={"/"} className="hover:underline">
            <div className="flex items-center space-x-2">
              <BiCalculator className="text-green-500 text-2xl" />
              <h1
                className={`${poppins.className} text-xl font-semibold text-gray-800 dark:text-gray-200`}
              >
                Risity
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <Link
                  href="#features"
                  className="hover:text-green-500 dark:hover:text-green-400 transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/faithgaiciumia/risity"
                  target="_blank"
                  className="hover:text-green-500 dark:hover:text-green-400 transition"
                >
                  View Source
                </Link>
              </li>
              <li>
                <LightDarkModeToggle />
              </li>
            </ul>
            {/* <div className="flex space-x-4">
              {session?.user ? (
                <LogoutButton />
              ) : (
                <Link href={"/login"}>
                  <button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 dark:hover:bg-green-600 dark:text-gray-200 transition">
                    Log in
                  </button>
                </Link>
              )}
            </div> */}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
