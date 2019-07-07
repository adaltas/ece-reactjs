import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import { css } from "glamor"

class Layout extends Component {
  render() {
    const { props } = this
    const { children, data, page } = props

    const pages = data.pages.edges.map(page => {
      return { ...page.node.fields, ...page.node.frontmatter }
    })

    return (
        <>
          <Header
            siteTitle={data.site.siteMetadata.title}
          />
          <main>
            {children}
          </main>
          <Footer />
        </>
    )
  }
}

const WrappedLayout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site: site {
          siteMetadata {
            title
          }
        }
        pages: allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

export default WrappedLayout
