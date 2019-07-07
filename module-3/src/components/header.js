import { Link } from "gatsby"
import React, { Component } from "react"
import { css } from "glamor"

const styles = {
  header: {
    alignItems: "center",
    fontSize: "1.2rem",
    position: "relative",
    ' ul li': {
      display: 'inline-block',
    }
  },
}

class Header extends Component {
  render() {
    const { props } = this
    const { siteTitle, isHome, onMenuClick } = props
    return (
      <header className={css(styles.header)}>
      <ul>
        <li>
          <Link to="/usage">Usage</Link>
        </li>
        <li>
          <Link to="/changelog">Changelog</Link>
        </li>
        <li>
          <Link to="/license">MIT License</Link>
        </li>
        <li>
          <Link to="/contribute">Contribute</Link>
        </li>
      </ul>
      </header>
    )
  }
}
export default Header
