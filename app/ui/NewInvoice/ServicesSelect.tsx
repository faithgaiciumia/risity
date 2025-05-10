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

export default function ServicesSelect() {
  const { services, loading, error, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  if (loading) return <option className="text-sm text-green-600">Loading services...</option>;
  if (error) return <option className="text-sm text-red-600">Error loading services</option>;

  return (
    <>
      <select
        required
        name="serviceName"
        className={`w-full border px-2 py-4 mt-2 border-gray-700 text-sm ${poppins.className}`}
        defaultValue={""}
      >
        <option value="" disabled>
          Select service
        </option>
        {services.map((service) => (
          <option key={service.id} value={service.name}>
            {service.name} - {service.price}
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
          <NewService/>
        </DialogContent>
      </Dialog>
    </>
  );
}
