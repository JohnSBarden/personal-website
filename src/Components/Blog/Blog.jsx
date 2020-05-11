import { useState, useEffect } from "react";
import React from "react";
import "./Blog.scss";
import { useMarked } from "../../scripts/useMarked";

// TODO: Reuse the Carousel component, with the contents being filled by whatever markdown file's name is equal to the index
function Blog() {
  const [content, setContent] = useState("There aren't any blog posts ☹");

  useEffect(() => {
    const blogPath = require("./Posts/First.md");

    fetch(blogPath)
      .then((response) => {
        return response.text();
      })
      .then(setContent);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: useMarked(content) }}></div>;
}

export { Blog };
