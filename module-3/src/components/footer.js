import { Link } from "gatsby"
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
      // textAlign: 'left',
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
      // ':hover': {
      //   color: '#34BF1C',
      // },
    },
    "& p a": {
      textDecoration: "underline",
    },
  },
  navigate: {
    // width: '25%',
    flex: "1",
    "@media (max-width: 960px)": {
      // width: '50%',
      flex: "0 0 50%",
    },
  },
  contribute: {
    // width: '25%',
    flex: "1",
    "@media (max-width: 960px)": {
      // width: '50%',
      flex: "0 0 50%",
    },
  },
  about: {
    // width: '100%',
    flex: "2",
    "@media (max-width: 960px)": {
      // width: '100%',
      flex: "0 0 100%",
    },
  },
}

const Footer = () => (
  <footer className={css(styles.root)}>
    <div className={css(styles.container)}>
      <p>© Copiright</p>
    </div>
  </footer>
)

export default Footer
