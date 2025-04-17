import { Suspense } from "react";
import DashNav from "../ui/Dashboard/DashNav";
import Loading from "./loading";
import Link from "next/link";
import { workSans } from "../ui/fonts";
import { FaAnchor } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <DashNav />
      <div className="my-2 p-4 flex  space-x-6">
        {/* recent invoices div */}
        <div className="bg-white border border-gray-300 p-4 w-[50%]">
          {/* header */}
          <div className="flex items-center justify-between">
            <h1 className={`text-md font-bold ${workSans.className}`}>
              Recent Invoices
            </h1>
            <Link href={"/invoices"} className="hover:underline text-green-600">
              <span
                className={`text-md font-bold ${workSans.className} text-green-600`}
              >
                View all invoices
              </span>
            </Link>
          </div>
          {/* recents list */}
          <div className="my-2">
            <p className={`text-sm`}>
              <span className="font-bold">2 days ago </span>- invoice created
              for Faith Gaiciumia
            </p>
          </div>
        </div>
        {/* stats div */}
        <div className="bg-white border border-gray-300 p-4 w-[50%]">
          {/* heading */}
          <div className="flex items-center justify-between">
            <h1 className={`text-md font-bold ${workSans.className}`}>
              Stats at a glance
            </h1>
          </div>
          {/* stats list */}
          <div className="my-2">
            <div className="flex justify-between align-center">
              <p className="text-sm">Monthly Average Revenue</p>
              <p className="text-sm text-gray-500">12,000 kes</p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
