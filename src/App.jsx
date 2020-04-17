import React from "react";
import "./styles/App.scss";
import { MyCarousel } from "./Components/Carousel/MyCarousel";
// import { CodePen2 } from "./Components/Playgrounds/CodePen2";
import { CodePen } from "./Components/Playgrounds/CodePen";
import { Footer } from "./Components/Footer";

function App(props) {
  console.log("props in app ", props);
  // var location = ""; //"https://codepen.io/johnsbarden/pen/BaoyJOB";
  return (
    <div className="App">
      <MyCarousel />
      <CodePen />
      <Footer />
    </div>
  );
}

export default App;

// RANDOM PIC
// https://source.unsplash.com/collection/3508426/480x480

// ADD in Fun section with links to Steam, Discord, my PC https://pcpartpicker.com/user/cptobviousremark/saved/6fgp23
// youtube videos with me in them from games
// some photoshop examples?
// Pathfinder builds?
// dotabuff
