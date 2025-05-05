import DashNav from "../ui/Dashboard/DashNav";
import { poppins } from "../ui/fonts";

export default function Profile() {
  return (
    <>
      <DashNav />
      <div className="flex items-center justify-between p-4">
        <h1 className={`${poppins.className} text-md font-semibold text-gray-900 dark:text-white`}>Personal Information</h1>
        <button className="rounded-lg border border-gray-300 dark:border-gray-500 bg-green-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-green-900 hover:text-white transition">
          Save Changes
        </button>
      </div>
    </>
  );
}
