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
              <p className={`text-sm font-semibold  ${workSans.className}`}>Jan 20, 2024</p>
            </div>
          </div>
          <hr/>
          <div className="flex items-center justify-between my-4">
            <div>
                <p>FROM</p>
                <h2>Faith Gaiciumia</h2>
                <p>GaiciumiaFaith Tech.</p>
                <p>faithgaiciumia078@gmail.com</p>
            </div>
            <div>
                <p>TO</p>
                <h2>Tom Baraka</h2>
                <p>Tom Bytes Ltd.</p>
                <p>faithgaiciumia078@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
