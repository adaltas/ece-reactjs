import React from "react"
import "../layout.css"

const word = 'World'

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const fullName = (user) => (
  user.firstName + ' ' + user.lastName
)

const Layout = () => (
  <div className="greeting">Hello {word}! I am {user.firstName + ' ' + user.lastName}.</div>
)

export default Layout
