import { Link } from "gatsby"
import React, { Component } from "react"
import { css } from "glamor"

const styles = {
  header: {
    alignItems: "center",
    fontSize: "1.2rem",
    position: "relative",
    textAlign: 'center',
    padding: '1rem 0',
    backgroundColor: '#1E1633',
    ' ul li': {
      display: 'inline-block',
      padding: '0 1rem'
    }
  },
}

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/changelog">Changelog</Link>
          </li>
        </ul>
      </header>
    )
  }
}
export default Header
