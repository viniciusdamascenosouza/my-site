import styled from "styled-components";

export const CentralHeader = styled.div`
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  cursor: pointer;

  opacity: 0.4;

  top: 0;
  position: sticky;

  &:hover {
    opacity: 1;
    transition: 1.4s;
  }
`;

export const NameHeader = styled.p`
  font-size: 2rem;
  font-weight: bolder;
`;

export const ImageDevHeader = styled.img`
  width: 70px;
  max-width: 100%;

`;
