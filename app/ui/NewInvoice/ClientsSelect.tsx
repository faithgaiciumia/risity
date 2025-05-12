import { getClients } from "@/app/lib/data";
import { Client } from "@/app/lib/definitions";
import { useClientStore } from "@/app/store/clientStore";
import { useEffect, useState } from "react";
import { poppins } from "../fonts";
import NewClient from "./NewClient";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

export default function ClientsSelect({ register }: { register: any }) {
  const { clients, loading, error, fetchClients } = useClientStore();

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  if (loading)
    return (
      <option className="text-sm text-green-600">Loading clients...</option>
    );
  if (error)
    return (
      <option className="text-sm text-red-600">Error loading clients</option>
    );

  return (
    <>
      <select
        required
        {...register("clientEmail")}
        className={`w-full border px-2 py-4 mt-2 border-gray-700 text-sm ${poppins.className}`}
        defaultValue={""}
      >
        <option value="" disabled>
          Select client
        </option>
        {clients.map((client) => (
          <option key={client.id} value={client.email}>
            {client.name} - {client.email}
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
              Add New Client
            </button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Client</DialogTitle>
          </DialogHeader>
          <NewClient />
        </DialogContent>
      </Dialog>
    </>
  );
}
