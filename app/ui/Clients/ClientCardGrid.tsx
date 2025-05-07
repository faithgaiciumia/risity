import { poppins } from "../fonts";

export default function ClientCardGrid({
  id,
  name,
  email,
  companyName,
}: {
  id: string;
  name: string;
  email: string;
  companyName: string;
}) {
  return (
    <div className="min-h-[180px] h-full flex flex-col justify-between p-4 bg-white dark:bg-gray-900 shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-600 hover:scale-[1.02] transition-transform duration-200 ease-in-out cursor-pointer">
      <div className="flex items-center justify-between">
        <p
          className={`text-sm font-semibold text-gray-800 dark:text-white ${poppins.className}`}
        >
          {companyName}
        </p>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      <div className="space-y-4">
        <p
          className={`text-sm text-gray-600 dark:text-gray-400 ${poppins.className}`}
        >
          {name}
        </p>
        <p
          className={`text-md font-semibold text-gray-800 dark:text-white ${poppins.className}`}
        >
          {email}
        </p>
      </div>
    </div>
  );
}
