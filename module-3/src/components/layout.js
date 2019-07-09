import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"


class Layout extends Component {
  render() {
    const { props } = this
    const { children } = props
    return (
        <>
          <Header/>
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
              html
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
