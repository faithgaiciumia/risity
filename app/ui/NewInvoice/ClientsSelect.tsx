import { getClients } from "@/app/lib/data";
import { Client } from "@/app/lib/definitions";
import { useClientStore } from "@/app/store/clientStore";
import { useEffect, useState } from "react";

export default function ClientsSelect() {
  const { clients, loading, error, fetchClients } = useClientStore();

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  if (loading) return <option>Loading clients...</option>;
  if (error) return <option>Error loading clients</option>;

  return (
    <>
      {clients.map((client) => (
        <option key={client.id} value={client.email}>
          {client.name} - {client.email}
        </option>
      ))}
    </>
  );
}
