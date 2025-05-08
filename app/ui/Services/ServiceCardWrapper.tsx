"use client";

import { useViewStore } from "@/app/store/viewStore";
import { workSans } from "../fonts";
import ServiceCard from "./ServiceCard";


export default function ServicesCardWrapper({
  services,
}: {
  services: Record<string, any>[];
}) {
  const { viewType } = useViewStore();

  if (services.length === 0) {
    return (
      <p className={`p-4 ${workSans.className}`}>You have no services yet.</p>
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
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          name={service.name}
          description={service.description}
          price={service.price}
        />
      ))}
    </div>
  );
}
