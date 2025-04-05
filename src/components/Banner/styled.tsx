import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  column-gap: 2rem;
`;

export const TextsBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextBanner = styled.span`
  font-size: 3rem;
  font-weight: 100;
  color: #f0f8ff;
`;

export const StrongText = styled.strong`
  font-weight: 700;
  color: #c2d5e6;
`;

export const ArrowContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`

export const ImageBanner = styled.img`
  width: 587px;
  border-radius: 24px;
  object-fit: contain;
`;
