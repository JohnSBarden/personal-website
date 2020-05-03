import { Carousel } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import "./Carousel.scss";

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const links = [
    "https://imgur.com/PtGuXNR.jpg",
    "https://imgur.com/krlIdsU.jpg",
    "https://imgur.com/5Wvz7sc.jpg",
    "https://imgur.com/CnJkCDN.jpg",
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={links[0]} alt="Professional" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={links[1]}
          alt="Bike tour of Versailles in France 2019"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={links[2]} alt="Halloween 2017" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={links[3]}
          alt="Sporting KC launch party 2020"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export { MyCarousel };
