import { poppins } from "@/app/ui/fonts";
import NewInvoiceForm from "@/app/ui/NewInvoice/NewInvoiceForm";
import Link from "next/link";
import { BiCalculator } from "react-icons/bi";

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
          <div className="border-b border-gray-200 w-full h-[30vh]" />

          {/* Login Card */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 w-[90%] sm:w-[60%] md:w-[40%] mx-auto -mt-24">
            <div className="flex flex-col gap-6 justify-center items-center">
              {/* Title */}
              <h1
                className={`${poppins.className} text-2xl font-bold text-gray-800`}
              >
                Create New Invoice
              </h1>
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
