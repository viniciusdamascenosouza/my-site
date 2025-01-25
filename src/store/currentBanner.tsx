import { create } from "zustand";

type Banner = {
    banner: string;
    setBanner: (banner: string) => void;
}

const useStore = create<Banner>((set) => ({
    // banners: {
    //     presentation: {
    //         text: "Venha conhecer minha jornada:",
    //         strong: "Eu sou Vinícius Damasceno e este é o meu mundo!",
    //         img: "../../assets/contextPresentation.png",
    //     },
    //     aboutMe: {
    //         text: "Explorando a interseção da criatividade e da tecnologia",
    //         strong: "para criar experiências digitais cativantes.",
    //         img: "../../assets/contextAboutMe.png",
    //     },
    //     future: {
    //         text: "Explorando a interseção da criatividade e da tecnologia",
    //         strong: "para criar experiências digitais cativantes.",
    //         img: "../../assets/contextAboutMe.png",
    //     }
    // },
    banner: "presentation",
    setBanner: (banner: string) => set({ banner: banner }),
}));

export default useStore;