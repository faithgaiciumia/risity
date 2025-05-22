import { poppins } from "../fonts";
import { BiFile, BiFilterAlt, BiMoon } from "react-icons/bi";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";

export default function KeyFeatures() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900" id="features">
      <FeatureOne/>
      <FeatureTwo/>
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12 ${poppins.className}`}
        >
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
            <BiFile className="text-green-500 dark:text-green-400 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Create and Track Invoices
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Easily generate professional invoices and track their status from
              draft to payment.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
            <BiFilterAlt className="text-green-500 dark:text-green-400 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Filter by Status
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Quickly find what you need by filtering invoices based on draft,
              pending, or paid status.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
            <BiMoon className="text-green-500 dark:text-green-400 text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Light & Dark Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Choose the visual style that suits you best with full support for
              light and dark themes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
