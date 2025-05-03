import { FaShare } from "react-icons/fa6";
import { workSans } from "../fonts";

export default function InvoiceShareButton({isEditing}:{isEditing:boolean}) {
  return (
    <button
      disabled={isEditing}
      className={`${
        workSans.className
      } flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm ${
        isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
      }`}
    >
      <FaShare /> Share
    </button>
  );
}
