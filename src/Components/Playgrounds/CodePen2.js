import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent,
} from "react-codepen-prefill-embed";
import React, { useState } from "react";
import { CodePen } from "./CodePen";

function CodePen2(props) {
  useCodePenEmbed();
  if (props.location != "") {
    return <PrefillEmbed />;
  } else {
    return <CodePen />;
  }
}

export { CodePen2 };
