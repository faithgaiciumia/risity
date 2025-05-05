import { FaTrash } from "react-icons/fa6";
import { poppins, workSans } from "../fonts";

export default function DeleteAccountCard() {
  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
      <h2
        className={`${poppins.className} text-lg font-semibold text-gray-900 dark:text-white mb-3`}
      >
        Delete Account
      </h2>

      <p
        className={`${workSans.className} text-sm text-gray-700 dark:text-gray-300 mb-5`}
      >
        Permanently erase your account by clicking the button below. 
        Please note that this action is irreversible. You will lose access to 
        all invoices, client information, and account data.
      </p>

      <button
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      >
        <FaTrash />
        Delete Account
      </button>
    </div>
  );
}
