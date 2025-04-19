import { poppins, workSans } from "../fonts";

export default function FullInvoice({dateIssued, invoiceID}:{dateIssued:String; invoiceID:string}){
    return(
        <div className="p-4 max-w-screen-md mx-auto">
        <div className="p-4 bg-white shadow rounded-lg border border-gray-100 space-y-4">
          {/* Status and Title */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-2">
            <div className="w-fit text-center px-3 py-1 rounded-xl bg-red-100 text-red-600 border border-red-200 text-sm font-medium">
              <p>Unpaid</p>
            </div>
            <p className={`text-sm font-semibold ${poppins.className}`}>
              Bytes Website
            </p>
          </div>

          {/* Invoice Info */}
          <div className="flex flex-col md:flex-row justify-between gap-y-4">
            <div>
              <h1 className={`text-xl font-bold ${poppins.className}`}>
                {invoiceID}
              </h1>
            </div>
            <div className="space-y-1">
              <h2
                className={`text-sm font-semibold text-gray-700 ${poppins.className}`}
              >
                Date Issued
              </h2>
              <p className={`text-sm font-semibold ${workSans.className}`}>
                {dateIssued}
              </p>
            </div>
            <div className="space-y-1">
              <h2
                className={`text-sm font-semibold text-gray-700 ${poppins.className}`}
              >
                Due Date
              </h2>
              <p className={`text-sm font-semibold ${workSans.className}`}>
                Jan 20, 2024
              </p>
            </div>
          </div>

          <hr className="border-dotted border-t-2 border-gray-300 mb-4" />

          {/* From / To */}
          <div className="flex flex-col md:flex-row justify-between gap-y-6">
            <div>
              <p
                className={`text-sm text-gray-700 font-semibold mb-2 ${workSans.className}`}
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
                className={`text-sm text-gray-700 font-semibold mb-2 ${workSans.className}`}
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

          {/* Service Header */}
          <div className="flex items-center justify-between mt-4">
            <h2
              className={`${poppins.className} text-sm font-bold text-gray-700`}
            >
              Service
            </h2>
            <h2
              className={`${poppins.className} text-sm font-bold text-gray-700`}
            >
              Total
            </h2>
          </div>

          <hr />

          {/* Services List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className={`${workSans.className} text-sm font-semibold`}>
                Website Design
              </h2>
              <h2 className={`${workSans.className} text-sm font-semibold`}>
                Ksh 10,000
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <h2 className={`${workSans.className} text-sm font-semibold`}>
                Website Hosting
              </h2>
              <h2 className={`${workSans.className} text-sm font-semibold`}>
                Ksh 15,000
              </h2>
            </div>
          </div>

          {/* Totals */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className={`${workSans.className} text-sm font-semibold`}>
                Sub-total
              </h2>
              <h2 className={`${workSans.className} text-sm font-semibold`}>
                Ksh. 25,000
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <h2 className={`${workSans.className} text-sm font-semibold`}>
                10% tax
              </h2>
              <h2 className={`${workSans.className} text-sm font-semibold`}>
                Ksh. 2,500
              </h2>
            </div>
          </div>

          {/* Total Section */}
          <div className="flex items-center justify-between bg-green-600 my-4 p-4 text-white rounded-md">
            <h2 className={`${poppins.className} text-md font-semibold`}>
              Total
            </h2>
            <h2 className={`${poppins.className} text-md font-semibold`}>
              Ksh. 35,000
            </h2>
          </div>
        </div>
      </div>
    )
}