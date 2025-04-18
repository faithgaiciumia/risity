import { FaChartLine, FaMoneyBillWave, FaUsers } from "react-icons/fa6";
import { workSans } from "../fonts";
import StatItem from "./StatItem";

export default function StatsOverview() {
  return (
    <div className="bg-white border border-gray-300 p-4 w-full md:w-1/2">
      {/* heading */}
      <div className="flex items-center justify-between">
        <h1 className={`text-md font-bold ${workSans.className}`}>
          Stats at a glance
        </h1>
      </div>
      {/* stats list */}
      <div className="my-2 space-y-2">
        <StatItem
          icon={<FaChartLine className="text-green-600" />}
          label="Monthly Average Revenue"
          value="12,000 KES"
        />
        <StatItem
          icon={<FaMoneyBillWave className="text-green-600" />}
          label="Total Amount Received"
          value="12,000 KES"
        />
        <StatItem
          icon={<FaUsers className="text-green-600" />}
          label="Total Clients"
          value="12,000 KES"
        />
      </div>
    </div>
  );
}
