import { FaPen } from "react-icons/fa6";
import { poppins, workSans } from "../fonts";

export default function FullInvoiceHeader() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
      {/* heading */}
      <div>
        <h1
          className={`${poppins.className} text-lg font-semibold text-gray-800 dark:text-white`}
        >
          Full Invoice
        </h1>
      </div>
      {/* user action buttons */}
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <button className={`${workSans.className}`}>
          <FaPen /> Pdf
        </button>
        <button className={`${workSans.className}`}>
          <FaPen /> Share
        </button>
      </div>
      {/* crud action buttons */}
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <button className={`${workSans.className}`}>
          <FaPen /> Edit
        </button>
        <button className={`${workSans.className}`}>
          <FaPen /> Delete
        </button>
      </div>
    </div>
  );
}
