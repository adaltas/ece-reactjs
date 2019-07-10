import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import {Helmet} from "react-helmet";


class Layout extends Component {
  render() {
    const { props } = this
    const { children } = props
    return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{props.page.title}</title>
            <meta name="description" content={props.page.description}/>
            <meta name="keywords" content={props.page.keywords} />
          </Helmet>
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
