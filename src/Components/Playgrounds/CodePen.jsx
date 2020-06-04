import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent,
} from "react-codepen-prefill-embed";
import React from "react";
import { defaultJS } from "../../resources/defaultPlaygroundJS";
import "./Playground.scss";

function CodePen(props) {
  useCodePenEmbed();
  const renderJs = props.babelContent ?? defaultJS;

  return (
    <div className="code-pen" id={props.id}>
      <PrefillEmbed
        penTitle="Demo pen"
        embedHeight="400"
        themeId="39088"
        editable
        tags={["react", "react-docs-demo"]}
        htmlClasses={["loading", "no-js"]}
        head={
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        }
        scripts={[
          "https://unpkg.com/react@16.8.6/umd/react.development.js",
          "https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js",
          "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/1.0.1/react-bootstrap.min.js",
        ]}
        stylesheets={["https://unpkg.com/normalize.css@8.0.1/normalize.css"]}
      >
        <PrefillLang lang="html">
          {stripIndent`
              <div id="root"></div>
          `}
        </PrefillLang>
        <PrefillLang lang="scss">
          {stripIndent`
              $dark: #1a1d2d;
              $light: #696a70;
              $fontcolor: antiquewhite;
              body {
                background: $light; 
                margin: 1rem;
              }
              .app-header {
                  color: $fontcolor;
              }
              a:link {
                color: $dark;
                :hover {
                  color: violet;
                  cursor: pointer;
                }
              }
          `}
        </PrefillLang>
        <PrefillLang lang="babel">{renderJs}</PrefillLang>
      </PrefillEmbed>
    </div>
  );
}

export { CodePen };
