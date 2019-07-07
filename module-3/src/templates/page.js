import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "glamor"

const styles = {
  buttonContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    "> div": {
      position: "absolute",
      textAlign: "right",
      width: "100%",
      top: "1.5rem",
      " a": {
        marginLeft: ".5rem",
        cursor: "pointer",
      },
      " img": {
        width: "2rem",
      },
    },
  },
}

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark
  

  return (
    <Layout page={{ ...frontmatter, ...fields }}>
      <section>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
