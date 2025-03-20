import { Button, ToggleButton } from "@mui/material";
import useStore from "../../store/currentBanner";
import * as S from "./styled";

const Header = () => {
  const { banner, setBanner } = useStore();

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newBanner: string
  ) => {
    setBanner(newBanner);
  };

  return (
    <div style={{ top: "0", position: "sticky" }}>
      <S.Header>
        <S.LogoNameHeader>
          <S.ImageDevHeader src="../../assets/dev.svg" alt="Developer image" />
          <S.NameHeader>Vinícius Damasceno</S.NameHeader>
        </S.LogoNameHeader>

        <S.ButtonsHeader
          value={banner}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          // "standard" | "primary" | "secondary" | "error" | "info" | "success"
          | "warning",
          <ToggleButton
            sx={{
              color: "white",
              boxShadow: "none",
              fontSize: ".8rem",
              fontWeight: "bold",
              padding: "6px 12px",
              border: "1px solid",
              lineHeight: 1.5,
              backgroundColor: "#7b1fa2",
              borderColor: "#7b1fa2",
            }}
            color="standard"
            value="presentation"
            onClick={() => setBanner("presentation")}
          >
            Apresentação
          </ToggleButton>
          <ToggleButton
            sx={{
              color: "white",
              boxShadow: "none",
              fontSize: ".8rem",
              fontWeight: "bold",
              padding: "6px 12px",
              border: "1px solid",
              lineHeight: 1.5,
              backgroundColor: "#7b1fa2",
              borderColor: "#7b1fa2",
            }}
            color="standard"
            value="aboutMe"
            onClick={() => setBanner("aboutMe")}
          >
            Sobre mim
          </ToggleButton>
          <ToggleButton
            sx={{
              color: "white",
              boxShadow: "none",
              fontSize: ".8rem",
              fontWeight: "bold",
              padding: "6px 12px",
              border: "1px solid",
              lineHeight: 1.5,
              backgroundColor: "#7b1fa2",
              borderColor: "#7b1fa2",
            }}
            color="standard"
            value="future"
            onClick={() => setBanner("future")}
          >
            Futuro
          </ToggleButton>

        </S.ButtonsHeader>
      </S.Header>
    </div>
  );
};

export default Header;
