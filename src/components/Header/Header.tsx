import * as S from "./styled";

const Header = () => {
  return (
    <div style={{ top: "0", position: "sticky" }}>
      <S.CentralHeader>
        <S.ImageDevHeader src="../../assets/dev.svg" alt="Developer image" />
        <S.NameHeader>
          Vinícius Damasceno
        </S.NameHeader>
      </S.CentralHeader>
    </div>
  );
};

export default Header;
