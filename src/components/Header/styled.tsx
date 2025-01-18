import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoNameHeader = styled.div`
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  cursor: pointer;

  top: 0;
  position: sticky;

  opacity: 0.4;

  &:hover {
    opacity: 1;
    transition: 1.4s;
  }
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

export const ButtonsHeader = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const ButtonHeader = styled.button`
  padding: 10px 15px;

  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;

  color: white;
  font-size: 1rem;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    border: 1px solid #d391d8;
    background: linear-gradient(to right, #825585, #764579, #75357a, #7d3283, #712177);
  }
`;