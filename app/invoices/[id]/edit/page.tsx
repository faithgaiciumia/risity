import { Suspense } from "react";
import Loading from "../../loading";
import DashNav from "@/app/ui/Dashboard/DashNav";
import EditInvoiceForm from "@/app/ui/Invoices/EditInvoiceForm";

export default function EditInvoice() {
  return (
    <Suspense fallback={<Loading />}>
      <DashNav />
      
    </Suspense>
  );
}
