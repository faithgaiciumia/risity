import DashNav from "../ui/Dashboard/DashNav";
import { getServicesList } from "../lib/data";
import { Suspense } from "react";

import ClientsCardWrapper from "../ui/Clients/ClientsCardWrapper";
import Loading from "./loading";
import ServiceHeader from "../ui/Services/ServiceHeader";
import ServicesCardWrapper from "../ui/Services/ServiceCardWrapper";

export default async function Clients() {
  // Fetch all services
  const services = await getServicesList(10);

  return (
    <Suspense fallback={<Loading />}>
      <DashNav />
      <ServiceHeader />
      {/* wrapper */}
      <ServicesCardWrapper services={services} />
    </Suspense>
  );
}
