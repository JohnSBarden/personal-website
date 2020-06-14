import React from "react";
import { MyCarousel } from "../Components/Carousel/Carousel";
import { Col, Row } from "react-bootstrap";
import Blog from "../Components/Blog/Blog";
import Layout from "../components/layout/Layout";

function Personal({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <Layout id="personal">
      <Row id="main-body">
        <Col>
          <MyCarousel />
        </Col>
        <Col>
          {posts.map(({ node }) => (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              {" TEST BLOCK "}
            </div>
          ))}
          {/* <Blog index={posts} /> */}
        </Col>
      </Row>
    </Layout >
  );
}

export default Personal;

export const query = graphql`
{
  allMdx {
    edges {
      node {
        id
        frontmatter {
          date(fromNow: true)
          path
          title
          author
        }
        body
      }
    }
    totalCount
  }
}
`