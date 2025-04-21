import { create } from "zustand";
import { Client } from "../lib/definitions";
import { createNewClient, getClients } from "../lib/data";

type clientStore = {
  clients: Client[];
  loading: boolean;
  error: string | null;
  fetchClients: () => Promise<void>;
  addClient: (newClient: Client) => Promise<void>;
};

export const useClientStore = create<clientStore>((set) => ({
  clients: [],
  loading: false,
  error: null,
  fetchClients: async () => {
    try {
      set({ loading: true, error: null });
      const data = await getClients(20);
      set({ clients: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
  addClient: async (newClient: Client) => {
    try {
      set({ loading: true, error: null }); 
      const data = await createNewClient(newClient); 
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
