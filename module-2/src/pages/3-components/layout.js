import React, { Component } from "react"
import Wellcome from "./wellcome"

class Layout extends Component {
  render() {
    return (
      <div className="greeting">
        <Wellcome name='Patric'/>
        <Wellcome name='Helen'/>
        <Wellcome name='Bill'/>
      </div>
    )
  }
}

export default Layout
