import React, { Component } from "react"

class Clock extends Component {
  render() {
    return (
      <div className="clock">
        <h1>I am a Static Clock!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock
