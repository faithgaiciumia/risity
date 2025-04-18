import { poppins } from "../fonts";

export default function InvoiceCard(){
    return(
        <div className="flex items-center space-x-6 p-4 bg-white shadow justify-between">
            <div>
                <p className={`text-md font-bold ${poppins.className}`}>INV-2224</p>
            </div>
            <div>
                <p className={`text-md font-bold ${poppins.className} text-gray-600`}>Rajeet Singh</p>
            </div>
            <div>
                <p className={`text-md font-bold ${poppins.className} text-gray-600`}>Website Redesign</p>
            </div>
            <div>
                <p>unpaid</p>
            </div>
            <div>
                <p>Jan 2020</p>
            </div>
            <div>
                <p>Ksh. 2,000</p>
            </div>
        </div>
    )
}