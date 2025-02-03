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
        "Desenvolvedor Front-end com um ano de experiência profissional e mais de três anos de estudo na área. Busco sempre criar as melhores experiências para os usuários, unindo design e performance. Minha paixão pela programação e capacidade de adaptação a novas tecnologias me impulsionam a evoluir constantemente.",
    },
    aboutMe: {
      text: "Explorando a interseção da criatividade e da tecnologia",
      strong: "para criar experiências digitais cativantes.",
      img: "../../assets/contextAboutMe.png",
      bgColor: "#2a9620",
      largeText:
        "Como programador, possuo habilidades essenciais para o mercado de TI. Tenho facilidade para aprender e me adaptar a novas tecnologias, além de ser organizado, dedicado e criativo. Trabalho muito bem em equipe e sou apaixonado por tecnologia. Essas soft skills me ajudam a evoluir constantemente e a criar experiências cada vez melhores para os usuários.",
    },
    future: {
      text: "Inovando constantemente e construindo um futuro digital incrível,",
      strong: "uma linha de código de cada vez.",
      img: "../../assets/contextFuture.png",
      bgColor: "#206fe6",
      largeText:
        "Sigo focado no meu crescimento como desenvolvedor, aprimorando minhas habilidades e aprofundando meu conhecimento no universo do JavaScript. Meu objetivo é me tornar um especialista na área, dominar seu ecossistema e ir além, sempre buscando criar soluções inovadoras e impactantes. Além disso, trabalho constantemente para me tornar um profissional mais completo, desenvolvendo não apenas a parte técnica, mas também a comunicação, colaboração e a capacidade de entender melhor as necessidades dos usuários e do negócio",
    },
  },
}));

export default useStore;
