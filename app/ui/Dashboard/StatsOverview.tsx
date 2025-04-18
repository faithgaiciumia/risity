import { workSans } from "../fonts";

export default function StatsOverview(){
    return(
        <div className="bg-white border border-gray-300 p-4 w-full md:w-1/2">
          {/* heading */}
          <div className="flex items-center justify-between">
            <h1 className={`text-md font-bold ${workSans.className}`}>
              Stats at a glance
            </h1>
          </div>
          {/* stats list */}
          <div className="my-2">
            <div className="flex justify-between items-center">
              <p className="text-sm">Monthly Average Revenue</p>
              <p className="text-sm text-gray-500">12,000 kes</p>
            </div>
          </div>
        </div>
    )
}