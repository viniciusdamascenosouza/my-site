import { Carousel } from "react-bootstrap";
import ImgProject from "./ImgProject";

const Projects = () => {
  return (
    <>
      <h1 style={{ color: "#f0f8ff", marginTop: "5rem" }}>Projetos</h1>

      <Carousel fade>
        <Carousel.Item >
          <ImgProject file="../../assets/projects/acerteONumero.png" />
          <Carousel.Caption>
            <h3>Acerte o número</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImgProject file="../../assets/projects/aluGames.png" />
          <Carousel.Caption>
            <h3>AluGames</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImgProject file="../../assets/projects/aluraSpa.png" />
          <Carousel.Caption>
            <h3>AluraSPA</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Projects;
