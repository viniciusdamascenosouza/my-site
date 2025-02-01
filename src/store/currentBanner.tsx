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
      largeText: string;
    };
    aboutMe: {
      text: string;
      strong: string;
      img: string;
      bgColor: string;
      largeText: string;
    };
    future: {
      text: string;
      strong: string;
      img: string;
      bgColor: string;
      largeText: string;
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
      largeText:
        "Desenvolvedor Front-end, buscando sempre criar as melhores experiências para os usuários. Com mais de dois anos de estudo focados no desenvolvimento, minha paixão pela área e adaptação a novas tecnologias e tendências no universo da programação, me fazem evoluir cada dia mais.",
    },
    aboutMe: {
      text: "Explorando a interseção da criatividade e da tecnologia",
      strong: "para criar experiências digitais cativantes.",
      img: "../../assets/contextAboutMe.png",
      bgColor: "#2a9620",
      largeText:
        "Como programador tenho características importantes para o mercado de TI: Tenho facilidade para aprender, e me adaptar a novas tecnologias, sei trabalhar muito bem em equipe, sou organizado, dedicado, criativo e apaixonado por tecnologia! Essas soft skills me fazem aprender a oferecer cada vez mais uma melhor experiência para o usuário.",
    },
    future: {
      text: "Inovando constantemente e construindo um futuro digital incrível,",
      strong: "uma linha de código de cada vez.",
      img: "../../assets/contextFuture.png",
      bgColor: "#206fe6",
      largeText:
        "Hoje estou em busca de minha primeira oportunidade como desenvolvedor, em uma empresa onde possa contribuir com minhas habilidades. Enquanto essa hora não chegar estarei seguindo meu objetivo, de me tornar especialista no universo do JavaScript, dominar seu ecossistema e ir além!",
    },
  },
}));

export default useStore;
