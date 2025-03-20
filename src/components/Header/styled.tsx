import { ToggleButtonGroup } from "@mui/material";
import styled from "styled-components";

interface HeaderContainerProps {
  isBlurred: boolean;
}

interface ButtonHeaderProps {
  isActive: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 80px;

  position: sticky;
  top: 0;
  z-index: 999;

  display: flex;
  justify-content: space-around;
  align-items: center;
  
  transition: filter 0.3s;
  filter: ${props => props.isBlurred ? 'blur(1.5px)' : 'none'};
  
  border-bottom: 1px solid #d391d845;
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
  align-items: center;
`;

