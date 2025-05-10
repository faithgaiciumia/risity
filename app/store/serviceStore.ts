import { create } from "zustand";

import { getServices } from "../lib/data";
import { Service } from "../lib/definitions";

type serviceStore = {
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchServices: () => Promise<void>;
};

export const useServiceStore = create<serviceStore>((set) => ({
  services: [],
  loading: false,
  error: null,
  fetchServices: async () => {
    try {
      set({ loading: true, error: null });
      const data = await getServices(50);
      set({ services: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
