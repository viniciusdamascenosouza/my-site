import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
`;

export const TextBanner = styled.p`
  font-size: 3rem;
  color: aliceblue;
`;

export const ImageBanner = styled.img`
  width: 587px;

  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: 500ms;
  }
`;
