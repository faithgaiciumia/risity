"use client";

import { useViewStore } from "@/app/store/viewStore";
import { workSans } from "../fonts";
import ClientCard from "./ClientCard";

export default function ClientsCardWrapper({
  clients,
}: {
  clients: Record<string, any>[];
}) {
  const { viewType } = useViewStore();

  if (clients.length === 0) {
    return (
      <p className={`p-4 ${workSans.className}`}>You have no clients yet.</p>
    );
  }

  return (
    <div
      className={`${
        viewType === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          : "flex flex-col gap-2"
      } p-4`}
    >
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          id={client.id}
          name={client.name}
          email={client.email}
          companyName={client.company_name}
        />
      ))}
    </div>
  );
}
