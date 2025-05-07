import DashNav from "../ui/Dashboard/DashNav";
import { getClientsList } from "../lib/data";
import { Suspense } from "react";

import Loading from "./loading";
import ClientHeader from "../ui/Clients/ClientHeader";
import ClientsCardWrapper from "../ui/Clients/ClientsCardWrapper";

export default async function Clients() {
  // Fetch all clients
  const clients = await getClientsList(10);

  return (
    <Suspense fallback={<Loading />}>
      <DashNav />
      <ClientHeader />
      {/* wrapper */}
      <ClientsCardWrapper clients={clients} />
    </Suspense>
  );
}
