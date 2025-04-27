"use client";

import { getRevenueTrends } from "@/app/lib/data";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { workSans } from "../fonts";

export default function RevenueTrendsChart() {
  // get the data
  const [data, setData] = useState<{ month: string; revenue: number }[]>([]);
  useEffect(() => {
    async function fetchRevenueTrends() {
      const revenueData = await getRevenueTrends();
      setData(revenueData);
    }
    fetchRevenueTrends();
  }, []);
  return (
    <div className="w-full h-[300px] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-4 rounded-lg shadow-sm">
      <div>
        <h1
          className={`text-md font-bold ${workSans.className} text-gray-800 dark:text-white mb-4`}
        >
          Last 6 months revenue
        </h1>
        <hr className="border-gray-300 dark:border-gray-700" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} label={"Year-Month"} />
          <YAxis
            tickFormatter={(value) => `KES ${value / 1000}k`}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value) => `KES ${value.toLocaleString()}`}
            contentStyle={{ fontSize: 12 }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#34D399"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
