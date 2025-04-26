"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Nov', revenue: 120000 },
  { month: 'Dec', revenue: 150000 },
  { month: 'Jan', revenue: 180000 },
  { month: 'Feb', revenue: 140000 },
  { month: 'Mar', revenue: 200000 },
  { month: 'Apr', revenue: 170000 },
];

export default function RevenueTrendsChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `KES ${value / 1000}k`} />
          <Tooltip formatter={(value) => `KES ${value.toLocaleString()}`} />
          <Line type="monotone" dataKey="revenue" stroke="#34D399" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
