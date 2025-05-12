import { useEffect } from "react";
import { poppins } from "../fonts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useServiceStore } from "@/app/store/serviceStore";
import NewService from "../Services/NewService";
import { formatAmount } from "@/app/lib/helpers";

export default function ServicesSelect({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: (value: number) => void;
}) {
  //get services
  const { services, loading, error, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  if (loading)
    return (
      <option className="text-sm text-green-600">Loading services...</option>
    );
  if (error)
    return (
      <option className="text-sm text-red-600">Error loading services</option>
    );

  //compute amount
  const computeAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedServiceID = e.target.value;
    const selectedService = services.find((s) => s.id === selectedServiceID);
    if (selectedService) {
      setAmount(amount + selectedService.price);
    }
  };

  return (
    <>
      <select
        required
        name="serviceID"
        className={`w-full border px-2 py-4 mt-2 border-gray-700 text-sm ${poppins.className}`}
        defaultValue={""}
        onChange={computeAmount}
      >
        <option value="" disabled>
          Select service
        </option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name} - {formatAmount(service.price)}
          </option>
        ))}
      </select>

      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full flex justify-end">
            <button
              type="button"
              className="mt-2 border border-green-600 text-green-600 px-2 py-2 rounded text-sm"
            >
              Add New Service
            </button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Service</DialogTitle>
          </DialogHeader>
          <NewService />
        </DialogContent>
      </Dialog>
    </>
  );
}
