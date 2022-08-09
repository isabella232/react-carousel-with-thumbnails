import React, { useCallback, useRef, useState } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
} from "mdb-react-ui-kit";
import "./basic.css";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselInner = useRef(null);

  const slideChanged = useCallback(() => {
    const activeItem = carouselInner.current.querySelector(".active");
    setCurrentSlide(
      Array.from(carouselInner.current.children).indexOf(activeItem)
    );
  }, []);

  const changeSlide = useCallback((position) => {
    Array.from(carouselInner.current.children).forEach((el, i) => {
      if (i !== position) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
        slideChanged();
      }
    });
  }, []);

  return (
    <MDBContainer className="mt-5">
      <MDBCarousel
        id="carouselExampleIndicators"
        showControls
        fade
        onSlide={slideChanged}
      >
        <MDBCarouselInner ref={carouselInner}>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>

        <div className="carousel-indicators" style={{ marginBottom: "-20px" }}>
          <button
            className={`carousel-indicator ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => changeSlide(0)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp"
            />
          </button>
          <button
            className={`carousel-indicator ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => changeSlide(1)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp"
            />
          </button>
          <button
            className={`carousel-indicator ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => changeSlide(2)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp"
            />
          </button>
        </div>
      </MDBCarousel>
    </MDBContainer>
  );
}
