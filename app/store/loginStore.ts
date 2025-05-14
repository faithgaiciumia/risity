import { create } from "zustand";
import { getSession } from "../lib/getsession";

type loginStore = {
  session: Record<string, any> | null; 
  loading: boolean;
  error: string | null;
  checkUserSession: () => Promise<void>;
};

export const loginStore = create<loginStore>((set) => ({
  session: {},
  loading: false,
  error: null,
  checkUserSession: async () => {
    try {
      set({ loading: true, error: null });
      const data = await getSession();
      set({ session: data, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Unknown error", loading: false });
    }
  },
}));
