import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "styled-components";

export const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;

  border-bottom: 1px solid #d391d845;

  /* filter: blur(1px);

  &:hover {
    opacity: 1;
    transition: 80ms;
    filter: none;
  } */
`;

export const LogoNameHeader = styled.div`
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  cursor: pointer;
`;

export const NameHeader = styled.p`
  font-size: 1.5rem;
  font-weight: bolder;
  color: white;
`;

export const ImageDevHeader = styled.img`
  width: 50px;
  max-width: 100%;
`;

export const ButtonsHeader = styled(ToggleButtonGroup)`
  display: flex;
`;

