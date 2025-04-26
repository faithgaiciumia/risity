import { ReactNode } from "react";

export default function StatItem({icon, label, value}:{icon:ReactNode, label:string, value:string}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-sm">{icon}</span>
        <p className="text-sm">{label}</p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">{value}</p>
    </div>
  );
}
