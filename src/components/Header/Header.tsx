import * as S from "./styled";

const Header = () => {
  return (
    <div style={{ top: "0", position: "sticky" }}>
      <S.Header>
        <S.LogoNameHeader>
          <S.ImageDevHeader src="../../assets/dev.svg" alt="Developer image" />
          <S.NameHeader>Vinícius Damasceno</S.NameHeader>
        </S.LogoNameHeader>

        <S.ButtonsHeader>
          <S.ButtonHeader>Apresentação</S.ButtonHeader>
          <S.ButtonHeader>Sobre mim</S.ButtonHeader>
          <S.ButtonHeader>Futuro</S.ButtonHeader>
        </S.ButtonsHeader>
      </S.Header>
    </div>
  );
};

export default Header;
