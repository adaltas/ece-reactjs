import React, { Component } from "react"

class Raw extends Component {
  render() {
    return (
      <tr>
       <td>{this.props.name}</td>
       <td>{this.props.price}</td>
       <td>{this.props.released}</td>
     </tr>
    )
  }
}

export default Raw
