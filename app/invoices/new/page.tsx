import { poppins } from "@/app/ui/fonts";
import NewInvoiceForm from "@/app/ui/NewInvoice/NewInvoiceForm";
import Link from "next/link";
import { BiCalculator } from "react-icons/bi";
import { FaX } from "react-icons/fa6";

export default function CreateInvoice() {
  return (
    <>
      <main>
        <div className="min-h-screen bg-gray-50">
          {/* top bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href={"/"} className="hover:underline">
                <div className="flex items-center space-x-2">
                  <BiCalculator className="text-green-500 text-2xl" />
                  <h1 className={`${poppins.className} text-xl font-semibold`}>
                    Risity
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          {/* Decorative Top Section */}
          <div className="border-b border-gray-300 w-full h-[30vh]" />

          {/* Login Card */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 w-[90%] sm:w-[60%] md:w-[40%] mx-auto -mt-34">
            <div className="flex gap-6 justify-between items-center">
              {/* Title */}
              <h1
                className={`${poppins.className} text-2xl font-bold text-gray-800`}
              >
                Create New Invoice
              </h1>

              {/* Cancel/Close Button */}
              <Link
                href="/dashboard"
                aria-label="Cancel and go back to dashboard"
              >
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-150"
                >
                  <FaX size={20} />
                </button>
              </Link>
            </div>

            {/* inputs */}
            <div className="w-full  my-6">
              <NewInvoiceForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
