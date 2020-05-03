import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Personal from "./Pages/Personal";
import Professional from "./Pages/Professional";
import Media from "./Pages/Media";

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/personal" component={Personal}></Route>
      <Route exact path="/professional" component={Professional}></Route>
      <Route exact path="/media" component={Media}></Route>
    </Switch>
  );
};

export default Main;
