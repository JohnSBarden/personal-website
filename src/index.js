import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var text;

ReactDOM.render(<App text={text} />, document.getElementById("root"));

serviceWorker.unregister();
