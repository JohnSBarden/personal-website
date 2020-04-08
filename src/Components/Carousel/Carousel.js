import React, { Component, useState, useContext } from "react";
import { HookTimer } from "../Timer";

const imgUrls = [
  "https://source.unsplash.com/collection/3508426/",
  "https://source.unsplash.com/collection/3508426/",
  "https://source.unsplash.com/collection/3508426/",
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      imgIndex: 0,
    };
  }

  render() {
    return (
      <div className="carousel">
        <Slide url={imgUrls[this.state.imgIndex]} />
        <span id="renderTimer">The timer shows {this.state.timer}</span>
        <Timer />
      </div>
    );
  }
}

function FnCarousel(props) {
  HookTimer();
  var thisTimer = useContext(props.timer);
  console.log("this timer: ", thisTimer);

  return (
    <div className="carousel">
      <Slide />
      <span id="timer">The timer shows {thisTimer}</span>
    </div>
  );
}

const Slide = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const styling = {
    backgroundImage: `url(${imgUrls[imgIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "480px",
    width: "480px",
  };
  return <div className="slide" style={styling}></div>;
};

export { Carousel, FnCarousel };
