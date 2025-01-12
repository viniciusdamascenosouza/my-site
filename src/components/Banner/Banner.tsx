import { useState } from "react";

import * as S from "./styled";

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState("presentation");

  const banners = {
    presentation: {
      text: "Venha conhecer minha jornada:",
      strong: "Eu sou Vinícius Damasceno e este é o meu mundo!",
    },
    aboutMe: {
      text: "Explorando a interseção da criatividade e da tecnologia",
      strong: "para criar experiências digitais cativantes.",
    },
    future: {
      text: "Inovando constantemente e construindo um futuro digital incrível,",
      strong: "uma linha de código de cada vez.",
    },
  };

  return (
    <div>
      <S.Banner>
        <S.TextBanner>
            {`banners.${currentBanner}.text`}
          <br />
          <strong>`{`banners.${currentBanner}.strong`}`</strong>
        </S.TextBanner>
        <S.ImageBanner
          src="../../assets/contextoApresentacao.png"
          alt="homem usando computador"
        />
      </S.Banner>
      <div style={{ display: "flex", columnGap: "1rem" }}>
        <button onClick={() => setCurrentBanner("presentation")}>
          apresentação
        </button>
        <button onClick={() => setCurrentBanner("aboutMe")}>sobre mim</button>
        <button onClick={() => setCurrentBanner("future")}>futuro</button>
      </div>
    </div>
  );
};

export default Banner;
