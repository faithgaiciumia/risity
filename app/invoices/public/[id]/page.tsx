import { getInvoiceByIdPublic } from "@/app/lib/data";

export default async function InvoicePublicView(props: {
    params: Promise<{ id: string }>;
  }){
    // get id
      const params = await props.params;
      const id = params.id;
      //get the invoice
      const currentInvoice = await getInvoiceByIdPublic(id);
    return(
        <div>heyya</div>
    )
}