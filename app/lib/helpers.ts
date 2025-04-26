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

export function formatAmount(amount: number) {
  const formatter = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  });
  return formatter.format(amount);
}

export function generateLastSixMonths() {
  const months = [];
  const today = new Date();

  for (let i = 5; i >= 0; i--) {
    const date = new Date(today);
    date.setMonth(date.getMonth() - i);
    const yearMonth = date.toISOString().slice(0, 7);
    months.push(yearMonth);
  }

  return months;
}
