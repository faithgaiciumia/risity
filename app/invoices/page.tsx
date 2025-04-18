import { FaList } from "react-icons/fa6";
import DashNav from "../ui/Dashboard/DashNav";
import { poppins, workSans } from "../ui/fonts";
import { FaThLarge } from "react-icons/fa";
import InvoiceHeader from "../ui/Invoices/InvoiceHeader";

export default function Invoices() {
  return (
    <>
      <DashNav />
      <InvoiceHeader/>
    </>
  );
}
