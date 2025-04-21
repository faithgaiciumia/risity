import { create } from "zustand";
import { Client } from "../lib/definitions";
import { getClients } from "../lib/data";

type clientStore = {
  clients: Client[];
  loading: boolean;
  error: string | null;
  fetchClients: () => Promise<void>;
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
}));
