import React from "react"
import PersonsList from "./personsList"

const persons = [
  {'id': 0, 'name': 'Gregor Mart'},
  {'id': 1, 'name': 'Linda Klarc'},
  {'id': 2, 'name': 'Mark Brown'},
  {'id': 3, 'name': 'Eric Winsent'},
  {'id': 4, 'name': 'Laura Snow'},
];

const Page = () => (
  <PersonsList persons={persons}/>
)

export default Page
