import { ToggleButton } from "@mui/material";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

import useStore from "../../store/currentBanner";
import * as S from "./styled";
import { useState } from "react";

const Header = () => {
  const { banner, setBanner } = useStore();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newBanner: string
  ) => {
    setBanner(newBanner);
  };

  const handleTooltipOpen = () => {
    setIsTooltipOpen(true);
  };

  const handleTooltipClose = () => {
    setIsTooltipOpen(false);
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
            disabled={banner === "presentation"}
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
            disabled={banner === "aboutMe"}
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
            disabled={banner === "future"}
          >
            Futuro
          </ToggleButton>

          <HelpCenterIcon
            sx={{
              color: "white",
              fontSize: "1.2rem",
              marginLeft: "8px",
              cursor: "help",
            }}
            onMouseEnter={handleTooltipOpen}
            onMouseLeave={handleTooltipClose}
          />
          {isTooltipOpen && (
            <div style={{ position: "absolute", top: "100%", left: "50%" }}>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "8px",
                  color: "black",
                  fontSize: ".8rem",
                }}
              >
                Os botões acima levam você a diferentes partes da minha
                história.
              </div>
            </div>
          )}
        </S.ButtonsHeader>
      </S.Header>
    </div>
  );
};

export default Header;
