import React, { Component } from "react"
import { css } from "glamor"

const styles = {
  button: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#663399",
    minWidth: "200px",
    lineHeight: "2rem",
    fontSize: "1.5rem",
    cursor: "pointer",
  }
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick} className={css(styles.button)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default Toggle
