import React, { Component } from "react"

class Clock extends Component {
  
  constructor(props) {
    // Passing props to the constructor. Class components should always call the base constructor with props.
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div className="clock">
        <h1>I am a Dynamic Clock!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock
