export default function Recent({
  invoice_date,
  client_email,
}: {
  invoice_date: string;
  client_email: string;
}) {
  // get both dates to get the difference
  const invoiceDate = new Date(invoice_date);
  const today = new Date();

  const diffTime = today.getTime() - invoiceDate.getTime();
  const dayDifference = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  //   decide on what to show the user according to date difference
  let label = "";
  if (dayDifference === 0) {
    label = "Today";
  } else if (dayDifference === 1) {
    label = "Yesterday";
  } else {
    label = `${dayDifference} days ago`;
  }

  return (
    <div className="my-2">
      <p className="text-sm">
        <span className="font-bold">{label}</span> – invoice created for{" "}
        <span className="font-medium">{client_email}</span>
      </p>
    </div>
  );
}
