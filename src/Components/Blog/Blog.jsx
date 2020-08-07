import { useState, useEffect } from "react";
import React from "react";
import { graphql } from "gatsby"
import "./Blog.scss";
import { useMarked } from "../../scripts/useMarked";
import Layout from "../layout/Layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
// import { Pagination } from 'react-bootstrap';


// TODO: Reuse the Carousel component, with the contents being filled by whatever markdown file's name is equal to the index
export default function Blog({ data }) {
  // const paginationBasic = (
  //   <Pagination></Pagination>
  // );
  return (<div id="main-body">

    <div id="blog-post">
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </div>
  );
}
export const query = graphql`
query BlogContentQuery($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      author
      date
      slug
      title
    }
    body
    rawBody
  }
}

`