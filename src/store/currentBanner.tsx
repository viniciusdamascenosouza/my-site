import { create } from "zustand";

type Banner = {
  banner: string;
  setBanner: (banner: string) => void;
  banners: {
    presentation: {
      text: string;
      strong: string;
      img: string;
      bgColor: string;
    };
    aboutMe: {
      text: string;
      strong: string;
      img: string;
      bgColor: string;
    };
    future: {
      text: string;
      strong: string;
      img: string;
      bgColor: string;
    };
  };
};

const useStore = create<Banner>((set) => ({
  banner: "presentation",
  setBanner: (banner: string) => set({ banner: banner }),

  banners: {
    presentation: {
      text: "Venha conhecer minha jornada:",
      strong: "Eu sou Vinícius Damasceno e este é o meu mundo!",
      img: "../../assets/contextPresentation.png",
      bgColor: "#9a29db",
    },
    aboutMe: {
      text: "Explorando a interseção da criatividade e da tecnologia",
      strong: "para criar experiências digitais cativantes.",
      img: "../../assets/contextAboutMe.png",
      bgColor: "#2a9620",
    },
    future: {
      text: "Inovando constantemente e construindo um futuro digital incrível,",
      strong: "uma linha de código de cada vez.",
      img: "../../assets/contextFuture.png",
      bgColor: "#206fe6",
    },
  },
}));

export default useStore;
