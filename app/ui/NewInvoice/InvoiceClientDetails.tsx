import { Suspense } from "react";
import ClientsSelect from "./ClientsSelect";
import { poppins } from "../fonts";

export default function InvoiceClientDetails() {
  return (
    <>
      {/* client name and email input group */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className}`}>
            Client
          </label>
        </div>
        <div>
          <Suspense>
            <ClientsSelect />
          </Suspense>
        </div>
      </div>
    </>
  );
}
