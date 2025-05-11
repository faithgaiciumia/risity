import LightDarkModeToggle from "@/app/ui/Dashboard/LightDarkModeToggle";
import { poppins } from "@/app/ui/fonts";
import NewClient from "@/app/ui/NewInvoice/NewClient";
import Link from "next/link";
import { BiCalculator } from "react-icons/bi";
import { FaX } from "react-icons/fa6";

export default function AddClient() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/dashboard" aria-label="Go to Dashboard">
            <div className="flex items-center space-x-2">
              <BiCalculator className="text-green-500 text-2xl" />
              <h1 className={`${poppins.className} text-xl font-semibold text-gray-900 dark:text-white`}>
                Risity
              </h1>
            </div>
          </Link>
          <LightDarkModeToggle />
        </div>
      </div>

      {/* Decorative Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 w-full h-[30vh]" />

      {/* Card Section */}
      <section className="w-[90%] sm:w-[60%] md:w-[40%] mx-auto -mt-32">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          {/* Card Header */}
          <div className="flex justify-between items-center gap-6">
            <h2 className={`${poppins.className} text-md md:text-xl font-bold text-gray-800 dark:text-white`}>
              Create New Client
            </h2>
            <Link href="/dashboard" aria-label="Cancel and go back to dashboard">
              <button
                type="button"
                title="Cancel"
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-full"
              >
                <FaX size={16} />
              </button>
            </Link>
          </div>

          {/* Form Section */}
          <div className="w-full mt-4">
            <NewClient />
          </div>
        </div>
      </section>
    </main>
  );
}
