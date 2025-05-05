import DashNav from "../ui/Dashboard/DashNav";
import { poppins } from "../ui/fonts";
import UserProfileCircle from "../ui/Profile/UserProfileCircle";

export default function Profile() {
  return (
    <>
      <DashNav />
      {/* heading */}
      <div className="flex items-center justify-between p-4">
        <h1
          className={`${poppins.className} text-md font-semibold text-gray-900 dark:text-white`}
        >
          Personal Information
        </h1>
        <button className="rounded-lg border border-gray-300 dark:border-gray-500 bg-blue-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 hover:text-white transition">
          Save Changes
        </button>
      </div>
      {/* user profile circle */}
      <div className="p-4">
      <UserProfileCircle />
      </div>
    </>
  );
}
