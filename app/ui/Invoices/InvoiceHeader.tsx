import { FaList } from "react-icons/fa6";
import { poppins, workSans } from "../fonts";
import { FaThLarge } from "react-icons/fa";

export default function InvoiceHeader(){
    return(
        <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
        {/* heading */}
        <div>
          <h1 className={`${poppins.className} text-lg font-semibold`}>
            Invoices
          </h1>
        </div>
        {/* filters */}
        <div>
          <ul className="flex flex-wrap items-center gap-2 text-sm font-medium">
            <li>
              <button
                className={`${workSans.className} px-3 py-1 rounded-md hover:bg-green-100`}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={`${workSans.className} px-3 py-1 rounded-md hover:bg-green-100`}
              >
                Paid
              </button>
            </li>
            <li>
              <button
                className={`${workSans.className} px-3 py-1 rounded-md hover:bg-green-100`}
              >
                Unpaid
              </button>
            </li>
            <li>
              <button
                className={`${workSans.className} px-3 py-1 rounded-md hover:bg-green-100`}
              >
                Overdue
              </button>
            </li>
          </ul>
        </div>
        {/* toggle view buttons */}
        <div className="flex items-center gap-2">
          <button
            className={`${workSans.className} flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100`}
          >
            <FaList className="text-gray-600" />
            List
          </button>
          <button
            className={`${workSans.className} flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100`}
          >
            <FaThLarge className="text-gray-600" />
            Grid
          </button>
        </div>
      </div>
    )
}