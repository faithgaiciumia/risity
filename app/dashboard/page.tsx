import { Suspense } from "react";
import DashNav from "../ui/Dashboard/DashNav";
import Loading from "./loading";
import Link from "next/link";
import { workSans } from "../ui/fonts";

export default function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <DashNav />
      <div className="my-2 p-4 flex items-center space-x-6">
        {/* recent invoices div */}
        <div className="bg-white border border-gray-300 p-4 w-[50%]">
          {/* header */}
          <div className="flex items-center justify-between">
            <h1 className={`text-md font-bold ${workSans.className}`}>Recent Invoices</h1>
            <Link href={"/invoices"} className="hover:underline text-green-600">
              <span className={`text-md font-bold ${workSans.className} text-green-600`}>View all invoices</span>
            </Link>
          </div>
          {/* recents list */}
          
        </div>
        {/* stats div */}
        <div className="bg-white border border-gray-300 p-4 w-[50%]">
          <div className="flex items-center justify-between">
            <h1>Recent Invoices</h1>
            <Link href={"/invoices"}>
              <span>View all invoices</span>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
