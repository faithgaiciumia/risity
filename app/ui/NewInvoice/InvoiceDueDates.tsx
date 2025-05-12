import { poppins } from "../fonts";

export default function InvoiceDueDates() {
  return (
    <>
      {/* invoice status input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Invoice Status
          </label>
        </div>
        <div>
          <select
            required
            name="status"
            className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
            defaultValue={""}
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
      </div>

      {/* invoice date input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>Date</label>
        </div>
        <div>
          <input
            type="date"
            name="invoiceDate"
            required
            defaultValue={new Date().toISOString().split("T")[0]}
            className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          />
        </div>
      </div>

      {/* due date input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Due Date
          </label>
        </div>
        <div>
          <input
            type="date"
            name="dueDate"
            required
            className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-300 dark:bg-gray-800 dark:text-white text-sm ${poppins.className}`}
          />
        </div>
      </div>
    </>
  );
}
