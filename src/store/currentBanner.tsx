import { create } from "zustand";

type Banner = {
    banner: string;
    setBanner: (banner: string) => void;
}

const useStore = create<Banner>((set) => ({

    banner: "presentation",
    setBanner: (banner: string) => set({ banner: banner }),
}));

export default useStore;