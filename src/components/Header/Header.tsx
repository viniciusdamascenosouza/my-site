import { useEffect } from "react";
import useStore from "../../store/currentBanner";
import * as S from "./styled";

const Header = () => {
  const { banner, setBanner } = useStore();
  
useEffect(() => {
  console.log(banner)
}, [banner])

  return (
    <div style={{ top: "0", position: "sticky" }}>
      <S.Header>
        <S.LogoNameHeader>
          <S.ImageDevHeader src="../../assets/dev.svg" alt="Developer image" />
          <S.NameHeader>Vinícius Damasceno</S.NameHeader>
        </S.LogoNameHeader>

        <S.ButtonsHeader>
          <S.ButtonHeader onClick={() => setBanner("presentation")}>
            Apresentação
          </S.ButtonHeader>
          <S.ButtonHeader onClick={() => setBanner("aboutMe")}>
            Sobre mim
          </S.ButtonHeader>
          <S.ButtonHeader onClick={() => setBanner("future")}>
            Futuro
          </S.ButtonHeader>
        </S.ButtonsHeader>
      </S.Header>
    </div>
  );
};

export default Header;
