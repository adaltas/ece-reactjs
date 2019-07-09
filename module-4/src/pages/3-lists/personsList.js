import React, { Component } from "react"

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.persons.map((item) =>
            <li key={item.id}>{item.name}</li>
        )}
      </ul>
    )
  }
}

export default List
