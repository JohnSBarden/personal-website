import React from "react";
import Blog from "../components/Blog/Blog";
import { graphql, Link } from "gatsby";

export default function Personal({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <div id="main-body">
      {posts.map(({ node }, index) =>
        index == 0 ? (
          <Blog id={node.id} data={{ mdx: node }} />
        ) : (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title} — {node.frontmatter.date}
            </h3>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </div>
        )
      )}
    </div>
  );
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(fromNow: true)
            path
            title
            author
            slug
          }
          body
        }
      }
      totalCount
    }
  }
`;
