import React from "react";
import { MyCarousel } from "../Components/Carousel/Carousel";

export default function Index() {
  return (
    <div id="main-body">
      <audio id="meepmerp" src="http://www.myinstants.com/media/sounds/magic_immune.mp3" autoPlay preload="auto">
      </audio>
      <a className="blurb" href="/" style={{ padding: "5rem" }} >
        Meep-merp! That page didn't exist.  Let's go back home...
      </a>
      <MyCarousel />
    </div>
  );
}