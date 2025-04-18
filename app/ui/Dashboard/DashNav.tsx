import { BiCalculator } from "react-icons/bi";
import { poppins } from "../fonts";
import Link from "next/link";

export default function DashNav() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow">
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
          <div className="flex space-x-4">
            <Link href={"/invoices/new"}>
              <button
                className={`${poppins.className}  font-bold text-sm px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-600 transition`}
              >
                New
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
