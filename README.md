Responsive React Carousel Slider with Thumbnails built with the latest Bootstrap 5. An
improved version of the standard bootstrap carousel image gallery additionally equipped
with thumbnails. Vertical example included.
          

Check out [React Carousel with thumbnails documentation](https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails/) for detailed instructions & even more examples.

## Basic example

![React Carousel with thumbnails](/assets/basic.png)

```js
import React, { useCallback, useRef, useState } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
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
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).webp"
              alt="..."
            />
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).webp"
              alt="..."
            />
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
              alt="..."
            />
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
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).webp"
            />
          </button>
          <button
            className={`carousel-indicator ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => changeSlide(1)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).webp"
            />
          </button>
          <button
            className={`carousel-indicator ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => changeSlide(2)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
            />
          </button>
        </div>
      </MDBCarousel>
    </MDBContainer>
  );
}

```

```css
.carousel-indicators .carousel-indicator {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
}

.carousel-indicators .carousel-indicator.active {
  opacity: 1;
}
```

## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples

[React Carousel with thumbnails styled:
![React Carousel with thumbnails](/assets/styled.png)](https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails/#section-material-design-styling)

[React Carousel with thumbnails eCommerce gallery:
![React Carousel with thumbnails](/assets/gallery.png)](https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails/#section-ecommerce-gallery)

___

## More React documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/plugins/multi-item-carousel/">React multi item carousel</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/carousel/">React carousel</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/images/">React images</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/lightbox/">React lightbox</a></li>
</ul>
