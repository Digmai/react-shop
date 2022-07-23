import { Carousel } from "react-bootstrap"


export const PageSlider = () => {

    return (
        <div
            id="carouselExampleSlidesOnly"
            className=" PageCarousel   slide"
            data-bs-ride="Carousel"
            style={{margin: 0,  maxHeight: '400px !important'}}

        >
            <Carousel   >
                <Carousel.Item data-slider="Carousel">
                    <img 
                        className="d-block w-100 fluid"
                        // src="https://www.w3schools.com/bootstrap/la.jpg"
                        src="https://picsum.photos/300/400"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item data-slider="Carousel"> 
                    <img
                        className="d-block w-100"
                        // src="https://www.w3schools.com/bootstrap/chicago.jpg"
                        src="https://picsum.photos/300/400"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item data-slider="Carousel">
                    <img
                        className="d-block w-100"
                        // src="https://www.w3schools.com/bootstrap/ny.jpg"
                        src="https://picsum.photos/300/400"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}