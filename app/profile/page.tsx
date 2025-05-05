import { getUserByEmail } from "../lib/data";
import DashNav from "../ui/Dashboard/DashNav";
import { poppins, workSans } from "../ui/fonts";
import DeleteAccountCard from "../ui/Profile/DeleteAccountCard";
import UserProfileCircle from "../ui/Profile/UserProfileCircle";

export default async function Profile() {
  //get the current user
  const currentUser = await getUserByEmail();

  //separate first and last name
  const fullName = currentUser.name;

  let firstName = "";
  let lastName = "";

  if (fullName) {
    const [first, ...rest] = fullName.split(" ");
    firstName = first;
    lastName = rest.join(" ");
  }

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

      <div className="p-4">
        <hr className="border-gray-300 dark:border-gray-700 mb-4" />

        {/* user profile circle */}
        <div className="flex justify-center">
          <UserProfileCircle />
        </div>

        <form className="max-w-2xl mx-auto">
          <hr className="border-gray-300 dark:border-gray-700 my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="flex flex-col">
              <label
                className={`${workSans.className} font-bold text-sm mb-1 text-gray-800 dark:text-gray-200`}
              >
                First Name
              </label>
              <input
                type="text"
                className="border border-black dark:border-gray-500 dark:bg-gray-800 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter first name"
                defaultValue={firstName}
                name="firstName"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label
                className={`${workSans.className} font-bold text-sm mb-1 text-gray-800 dark:text-gray-200`}
              >
                Last Name
              </label>
              <input
                type="text"
                className="border border-black dark:border-gray-500 dark:bg-gray-800 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter last name"
                defaultValue={lastName}
                name="lastName"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                className={`${workSans.className} font-bold text-sm mb-1 text-gray-800 dark:text-gray-200`}
              >
                Email
              </label>
              <input
                type="email"
                className="border border-black dark:border-gray-500 dark:bg-gray-800 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter email address"
                defaultValue={currentUser?.email ?? ""}
                name="email"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <label
                className={`${workSans.className} font-bold text-sm mb-1 text-gray-800 dark:text-gray-200`}
              >
                Company Name
              </label>
              <input
                type="text"
                className="border border-black dark:border-gray-500 dark:bg-gray-800 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter company name"
                defaultValue={currentUser?.company ?? ""}
                name="company"
              />
            </div>
          </div>

          <hr className="border-gray-300 dark:border-gray-700 my-6" />
        </form>
      </div>
      {/* delete account card */}
      <div className="p-4">
        <DeleteAccountCard />
      </div>
    </>
  );
}
