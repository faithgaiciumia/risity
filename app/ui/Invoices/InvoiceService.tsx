import { workSans } from "../fonts";

export default function InvoiceService({
  serviceName,
  serviceDescription,
  servicePrice,
}: {
  serviceName: string;
  serviceDescription: string;
  servicePrice: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2
        className={`${workSans.className} text-sm font-semibold dark:text-gray-300`}
      >
        {serviceName}
      </h2>
      <h2
        className={`${workSans.className} text-sm font-semibold dark:text-gray-300`}
      >
        {servicePrice}
      </h2>
    </div>
  );
}
