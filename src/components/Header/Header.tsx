import styled from "styled-components";

const Header = () => {
  const devImage = require("../../assets/scroll-top.svg");
  const exampleImage = "<>";

  const SHeader = styled.div`
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    
    opacity: 0.4;

    top: 0;
    position: sticky;

    &:hover{
        opacity: 1;
        transition: 1.4s;
    }

    p {
      font-weight: bolder;
      font-size: 20px;
    }

  `;

  return (
    <div style={{top: '0', position: 'sticky'}}>
      <SHeader>
        <p>{exampleImage}</p>
        {/* <img src={devImage} alt="ícone dev <>" /> */}
        <h1>Vinícius Damasceno</h1>
      </SHeader>
    </div>
  );
};

export default Header;
