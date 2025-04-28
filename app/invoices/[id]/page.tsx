import { getInvoiceById } from "@/app/lib/data";
import { formatAmount, formatDate, formatInvoiceID } from "@/app/lib/helpers";
import DashNav from "@/app/ui/Dashboard/DashNav";
import { poppins, workSans } from "@/app/ui/fonts";
import FullInvoice from "@/app/ui/Invoices/FullInvoice";
import FullInvoiceHeader from "@/app/ui/Invoices/FullInvoiceHeader";

export default async function InvoiceDetail(props: {
  params: Promise<{ id: string }>;
}) {
  // get id
  const params = await props.params;
  const id = params.id;
  //get the invoice
  const currentInvoice = await getInvoiceById(id);
  return (
    <>
      <DashNav /> 
      
      <FullInvoice
        dateIssued={formatDate(currentInvoice.invoice_date)}
        invoiceID={formatInvoiceID(
          currentInvoice.invoice_date,
          currentInvoice.id
        )}
        status={currentInvoice.status}
        dueDate={formatDate(currentInvoice.due_date)}
        taskTitle={currentInvoice.task_title}
        userEmail={currentInvoice.user_email}
        clientEmail={currentInvoice.client_email}
        totalAmount={formatAmount(currentInvoice.total_amount)}
      />
    </>
  );
}
