import { create } from "zustand";

// type definitions
type ViewType = "list" | "grid";
interface ViewStore {
  viewType: ViewType;
  setViewType: (view: ViewType) => void;
  initializeViewType: () => void;
}

export const useViewStore = create<ViewStore>((set) => ({
  viewType: "list",
  setViewType: (view) => set({ viewType: view }),
  initializeViewType: () => {
    //initialize view type to grid for smaller screens
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      set({ viewType: "grid" });
    }
  },
}));
