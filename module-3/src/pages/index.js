import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <Layout>
    <div>
      <section>
        <div>
          <h2>This is the index page</h2>
          <p>There is a content over here.</p>
          
          <h2>List of pages:</h2>
          <ul>
          {
            edges.map(edge => 
              <li key={edge.node.frontmatter.title}>
                <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
              </li>)
          }
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
