import { useState, useEffect } from "react";
import React from "react";
import { graphql } from "gatsby"
import "./Blog.scss";
import { useMarked } from "../../scripts/useMarked";
// import { Pagination } from 'react-bootstrap';


// TODO: Reuse the Carousel component, with the contents being filled by whatever markdown file's name is equal to the index
export default function Blog(props) {
  // const paginationBasic = (
  //   <Pagination></Pagination>
  // );
  const [content, setContent] = useState("There aren't any blog posts ☹");

  console.log(props.index, props.allMdx);
  useEffect(() => {
    console.log('starting require')
    const blogPath = require("./posts/First.mdx");
    console.log(blogPath);
    fetch(blogPath)
      .then((response) => {
        return response.text();
      })
      .then(setContent);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: useMarked(content) }}></div>;
}

