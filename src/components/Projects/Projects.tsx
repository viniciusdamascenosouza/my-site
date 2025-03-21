import { Carousel } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <h1 style={{ color: "#f0f8ff", marginTop: "5rem" }}>Projetos</h1>

      <div>
      <Carousel>
      <Carousel.Item>
        <img src="../../assets/projects/acerteONumero.png" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../assets/public" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../assets/public" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </>
  );
};

export default Projects;
