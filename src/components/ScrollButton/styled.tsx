import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";

export const ScrollButton = styled(ScrollToTop)`
  position: fixed;
  bottom: 20px;
  right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  svg {
    fill: white;
  }
`;
