import { Carousel } from "react-bootstrap";

export const Carousels = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className=" carousel   slide"
      data-bs-ride="carousel"

    >
      <Carousel  >
        <Carousel.Item >
          <img
            className="d-block w-100 fluid"
            // src="https://www.w3schools.com/bootstrap/la.jpg"
            src="https://picsum.photos/1200/300"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://www.w3schools.com/bootstrap/chicago.jpg"
            src="https://picsum.photos/1200/300"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://www.w3schools.com/bootstrap/ny.jpg"
             src="https://picsum.photos/1200/300"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
