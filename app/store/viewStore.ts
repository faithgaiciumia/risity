import { create } from "zustand";

// type definitions
type ViewType = "list" | "grid";
interface ViewStore {
  viewType: ViewType;
  setViewType: (view: ViewType) => void;
}

export const useViewStore = create<ViewStore>((set) => ({
  viewType: "list",
  setViewType: (view) => set({ viewType: view }),
}));
