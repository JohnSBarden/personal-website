import React from "react";
import "./App.scss";
import { MyCarousel } from "./Components/Carousel/MyCarousel";
// import { CodePen2 } from "./Components/Playgrounds/CodePen2";
import { CodePen } from "./Components/Playgrounds/CodePen";

function App(props) {
  console.log("props in app ", props);
  // var location = ""; //"https://codepen.io/johnsbarden/pen/BaoyJOB";
  return (
    <div className="App">
      <MyCarousel />
      <CodePen />
      {/*<CodePen2 id="playground" script={props.text} location={location} />*/}
    </div>
  );
}

export default App;

// RANDOM PIC
// https://source.unsplash.com/collection/3508426/480x480
