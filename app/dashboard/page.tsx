import { Suspense } from "react";
import DashNav from "../ui/Dashboard/DashNav";
import Loading from "./loading";
import Link from "next/link";
import { workSans } from "../ui/fonts";
import { FaAnchor } from "react-icons/fa6";
import RecentInvoices from "../ui/Dashboard/RecentInvoices";
import StatsOverview from "../ui/Dashboard/StatsOverview";
import RevenueTrendsChart from "../ui/Dashboard/RevenueTrendsChart";

export default function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <DashNav />
      <div className="my-2 p-4 flex flex-col md:flex-row gap-6">
        {/* recent invoices div */}
        <RecentInvoices/>

        {/* stats div */}
        <StatsOverview/>        
      </div>
      <div>
        <RevenueTrendsChart/>
      </div>
    </Suspense>
  );
}
