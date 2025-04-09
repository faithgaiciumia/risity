import { poppins } from "../fonts";
import { BiFile, BiFilterAlt, BiMoon } from "react-icons/bi";

export default function KeyFeatures() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-gray-800 mb-12 ${poppins.className}`}
        >
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <BiFile className="text-green-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Create and Track Invoices
            </h3>
            <p className="text-gray-600 text-sm">
              Easily generate professional invoices and track their status from
              draft to payment.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <BiFilterAlt className="text-green-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Filter by Status</h3>
            <p className="text-gray-600 text-sm">
              Quickly find what you need by filtering invoices based on draft,
              pending, or paid status.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <BiMoon className="text-green-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Light & Dark Mode</h3>
            <p className="text-gray-600 text-sm">
              Choose the visual style that suits you best with full support for
              light and dark themes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
