"use client";
import { useActionState, useEffect } from "react";
import { poppins, workSans } from "../fonts";
import UserProfileCircle from "./UserProfileCircle";
import { updateUser } from "@/app/lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function EditProfileForm({
  firstName,
  lastName,
  email,
  company,
}: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}) {
  //router for refreshing after successful delete
  const router = useRouter();
  //handle form submission
  const [message, formAction, isPending] = useActionState(
    updateUser,
    undefined
  );

  // listen for a message from the action
  useEffect(() => {
    if (message === "User updated successfully.") {
      toast.success(message);
      // refresh the page to refetch added data
      router.refresh();
    } else if (message) {
      toast.error(message);
    }
  }, [message]);
  return (
    <form action={formAction}>
      <ToastContainer />
      <div className="flex items-center justify-between p-4">
        <h1
          className={`${poppins.className} text-sm md:text-md font-semibold text-gray-900 dark:text-white`}
        >
          Personal Information
        </h1>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg border border-gray-300 dark:border-gray-500 bg-blue-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 hover:text-white transition"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <FaSpinner className="animate-spin" /> Saving ...
            </span>
          ) : (
            "Save"
          )}
        </button>
      </div>

      <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-md shadow-sm">
        <div className="flex justify-center mb-6">
          <UserProfileCircle email={email} />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label
                className={`${workSans.className} font-medium text-sm text-gray-700 dark:text-gray-300 mb-2`}
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                defaultValue={firstName}
                className="rounded-lg border text-sm border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label
                className={`${workSans.className} font-medium text-sm text-gray-700 dark:text-gray-300 mb-2`}
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                defaultValue={lastName}
                className="rounded-lg border text-sm border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                className={`${workSans.className} font-medium text-sm text-gray-700 dark:text-gray-300 mb-2`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email ?? ""}
                readOnly
                className="rounded-lg border text-sm border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <label
                className={`${workSans.className} font-medium text-sm text-gray-700 dark:text-gray-300 mb-2`}
              >
                Company Name
              </label>
              <input
                type="text"
                name="company"
                placeholder="e.g. Acme Inc."
                defaultValue={company ?? ""}
                className="rounded-lg border text-sm border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
