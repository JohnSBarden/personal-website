import React from "react";
import "./SoundCloud.scss";

export function Soundcloud(props) {
  return (
    <div>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={props.url}
      ></iframe>
      <div className="sound-cloud-parent">
        <a
          href="https://soundcloud.com/fyb_to_me"
          title="Fyb"
          target="_blank"
          className="sound-cloud-link"
        >
          Fyb
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/fyb_to_me/sets/trifecta"
          title="Trifecta"
          target="_blank"
          className="sound-cloud-link"
        >
          Trifecta
        </a>
      </div>
    </div>
  );
}
