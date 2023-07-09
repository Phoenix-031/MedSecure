import { createStore } from "zustand";


const useStore = createStore((set) => ({
    // state
    properties: [],
    // actions
    setProperties: (properties) => set({ properties }),
}));

export default useStore;