import DashNav from "@/app/ui/Dashboard/DashNav";
import { poppins, workSans } from "@/app/ui/fonts";

export default function InvoiceDetail() {
  return (
    <>
      <DashNav />
      <div className="p-4">
        <div className="p-4 bg-white shadow rounded-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="w-[80px] text-center px-3 py-1 rounded-xl bg-red-100 text-red-600 border border-red-200 text-sm font-medium">
              <p>Unpaid</p>
            </div>
            <div>
              <p className={`text-sm font-semibold ${poppins.className}`}>
                Bytes Website
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between my-4">
            <div>
              <h1 className={`text-xl font-bold ${poppins.className}`}>
                INV-2024007
              </h1>
            </div>
            <div>
              <h2
                className={`text-md font-semibold text-gray-700 ${poppins.className}`}
              >
                Date Issued
              </h2>
              <p className={`text-sm font-semibold  ${workSans.className}`}>
                Jan 16, 2024
              </p>
            </div>
            <div>
              <h2
                className={`text-md font-semibold text-gray-700 ${poppins.className}`}
              >
                Due Date
              </h2>
              <p className={`text-sm font-semibold  ${workSans.className}`}>
                Jan 20, 2024
              </p>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between my-4">
            <div>
              <p
                className={`text-sm text-gray-700 ${workSans.className} font-semibold mb-2`}
              >
                FROM
              </p>
              <h2 className={`text-md ${poppins.className}`}>
                Faith Gaiciumia
              </h2>
              <p className={`text-sm ${workSans.className}`}>
                GaiciumiaFaith Tech.
              </p>
              <p className={`text-sm ${workSans.className}`}>
                faithgaiciumia078@gmail.com
              </p>
            </div>
            <div>
              <p
                className={`text-sm text-gray-700 ${workSans.className} font-semibold mb-2`}
              >
                TO
              </p>
              <h2 className={`text-md ${poppins.className}`}>Tom Baraka</h2>
              <p className={`text-sm ${workSans.className}`}>Tom Bytes Ltd.</p>
              <p className={`text-sm ${workSans.className}`}>
                faithgaiciumia078@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <h2
              className={`${poppins.className} text-md font-bold text-gray-700`}
            >
              Service
            </h2>
            <h2
              className={`${poppins.className} text-md font-bold text-gray-700`}
            >
              Total
            </h2>
          </div>
          <hr />
          <div>
            <div className="flex items-center justify-between my-2">
              <h2 className={`${workSans.className} text-md font-semibold`}>
                Website Design
              </h2>
              <h2 className={`${workSans.className} text-md font-semibold`}>
                Ksh 10,000
              </h2>
            </div>
            <div className="flex items-center justify-between my-2">
              <h2 className={`${workSans.className} text-md font-semibold`}>
                Website Hosting
              </h2>
              <h2 className={`${workSans.className} text-md font-semibold`}>
                Ksh 15,000
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div></div>
            <div>
              <h2
                className={`${workSans.className} text-sm font-semibold text-gray-700`}
              >
                Sub-total
              </h2>
            </div>
            <div>
              <h2
                className={`${workSans.className} text-sm font-semibold text-gray-700`}
              >
                Ksh. 25,000
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div></div>
            <div>
              <h2
                className={`${workSans.className} text-sm font-semibold text-gray-700`}
              >
                10% tax
              </h2>
            </div>
            <div>
              <h2
                className={`${workSans.className} text-sm font-semibold text-gray-700`}
              >
                Ksh. 2,500
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between bg-green-600 my-4 p-4 text-white">
            <div></div>
            <div>
              <h2 className={`${poppins.className} text-md font-semibold`}>Total</h2>
            </div>
            <div>
              <h2 className={`${poppins.className} text-md font-semibold`}>Ksh. 35,000</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
