import React, { Component } from "react"
import Header from "./header"
import Raw from "./raw"

class Table extends Component {
  render() {
    return (
      <table>
        <Header/>
        <Raw name="iPod" price="100" released="03/11/2012"/>
        <Raw name="TV" price="200" released="11/01/2016"/>
        <Raw name="Car" price="5000" released="23/02/2014"/>
      </table>
    )
  }
}

export default Table
