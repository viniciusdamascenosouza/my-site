import { useState } from "react";

import * as S from "./styled";

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState("presentation");

  const banners = {
    presentation: {
      text: "Venha conhecer minha jornada:",
      strong: "Eu sou Vinícius Damasceno e este é o meu mundo!",
      img: "../../assets/contextPresentation.png",
    },
    aboutMe: {
      text: "Explorando a interseção da criatividade e da tecnologia",
      strong: "para criar experiências digitais cativantes.",
      img: "../../assets/contextAboutMe.png",
    },
    future: {
      text: "Inovando constantemente e construindo um futuro digital incrível,",
      strong: "uma linha de código de cada vez.",
      img: "../../assets/contextFuture.png",
    },
  };

  return (
    <>
      <S.Banner>
        <S.TextBanner>
          {banners[currentBanner as keyof typeof banners].text}
          <br />
          <strong>
            {banners[currentBanner as keyof typeof banners].strong}
          </strong>
        </S.TextBanner>
        <S.ImageBanner
          src={`${banners[currentBanner as keyof typeof banners].img}`}
          alt="imagem pessoa tecnológica"
        />
      </S.Banner>
      <div style={{ display: "flex", columnGap: "1rem" }}>
        <button onClick={() => setCurrentBanner("presentation")}>
          Apresentação
        </button>
        <button onClick={() => setCurrentBanner("aboutMe")}>Sobre mim</button>
        <button onClick={() => setCurrentBanner("future")}>Futuro</button>
      </div>
    </>
  );
};

export default Banner;
