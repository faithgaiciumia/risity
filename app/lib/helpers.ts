export function formatDate(date: string | Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
}

export function formatInvoiceID(invoiceDate: Date | string, id: string) {
  const dateStr = new Date(invoiceDate)
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, ""); 

  const idSegment = id.slice(0, 4).toUpperCase(); 

  return `INV-${dateStr}-${idSegment}`;
}
