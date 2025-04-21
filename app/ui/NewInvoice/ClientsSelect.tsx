import { getClients } from "@/app/lib/data";

export default async function ClientsSelect() {
  const clients = await getClients(20);
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
