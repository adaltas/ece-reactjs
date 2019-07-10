import React from "react"
import { css } from "glamor"

const styles = {
  root: {
    background: `#1E1633`,
    backgroundSize: "cover",
    padding: "2rem 0",
  },
  container: {
    maxWidth: 800,
    display: "flex",
    flexWrap: "wrap",
    color: "white",
    margin: "0 auto",
    "@media (max-width: 960px)": {
      padding: "0rem 1rem",
    },
    "& h2": {
      margin: "1.5rem 0 1rem 0",
      fontWeight: "normal",
      fontSize: "1.4rem",
    },
    "& ul, & p": {
      margin: "0 0 0 0",
    },
    "& li": {
      margin: 0,
      textIndent: 0,
      listStyleType: "none",
    },
    "& a": {
      textDecoration: "none",
      color: "white",
    },
    "& p a": {
      textDecoration: "underline",
    },
  },
  about: {
    flex: "2",
    "@media (max-width: 960px)": {
      flex: "0 0 100%",
    },
  },
}

const Footer = () => (
  <footer className={css(styles.root)}>
    <div className={css(styles.container)}>
      <div className={css(styles.about)}>
        <h2>About</h2>
        <p>
          This is a Gatsby static website.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
