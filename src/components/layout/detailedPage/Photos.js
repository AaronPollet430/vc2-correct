import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import '../../CSS/DetailedPage.css'

function Photos() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {require('../../img/accommodatie_01.jpeg')} //"/vc2-frontend/src/components/img/accommodatie_01.jpeg/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {require('../../img/eetkamer.jpg')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {require('../../img/keuken.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {require('../../img/slaapkamer.jpg')}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {require('../../img/badkamer.jpg')}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Photos;