import { Carousel } from "react-bootstrap";
import ImgProject from "./ImgProject";

const Projects = () => {
  return (
    <>
      <h1 style={{ color: "#f0f8ff", marginTop: "5rem" }}>Projetos</h1>

      <Carousel fade interval={null}>
        <Carousel.Item>
          <a
            href="https://game-acerte-o-numero.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgProject file="../../assets/projects/acerteONumero.png" />
            <Carousel.Caption>
              <h3>Acerte o número</h3>
              <p style={{padding: '0 10rem'}}>
                Jogo divertido de acertar o número, com comandos de voz para
                maior imersão Jogo divertido de acertar o número, com comandos
                de voz para maior imersão.
              </p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://alu-games-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgProject file="../../assets/projects/aluGames.png" />
            <Carousel.Caption>
              <h3>AluGames</h3>
              <p>
                Sistema de locação de jogos de tabuleiro, permitindo que os
                usuários explorem novas experiências sem precisar comprar.
              </p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://sass-nine-chi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgProject file="../../assets/projects/aluraSpa.png" />
            <Carousel.Caption>
              <h3>AluraSPA</h3>
              <p>
                Interface de exibição do AluraSPA, projetada para apresentar a
                marca de forma clara e atraente.
              </p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://amigo-secreto-nine-lemon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgProject file="../../assets/projects/amigoSecreto.png" />
            <Carousel.Caption>
              <h3>Amigo Secreto</h3>
              <p>
                Aplicação para sorteio de Amigo Secreto de forma simples e
                rápida.
              </p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Projects;
