import styled from "styled-components";

export const ImgDefault = styled.img`
  max-width: 100%;
  height: 380px;
  object-fit: contain;

  filter: blur(1px);
  transform: filter 5s;
  opacity: 0.5;

  &:hover {
    filter: blur(0.5px);
    opacity: 1;
  }
`;
