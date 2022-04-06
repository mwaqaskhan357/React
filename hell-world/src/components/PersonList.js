import React, { Component } from "react"
import Person from "./Person"

export default class PersonList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: [
        {
          id: 1,
          name: "Diana",
          age: 20,
          skill: "React",
        },
        {
          id: 2,
          name: "Bruce",
          age: 25,
          skill: "Angular",
        },
        {
          id: 3,
          name: "Kyle",
          age: 35,
          skill: "JavaScript",
        },
      ],
    }
  }

  render() {
    const personList = this.state.persons.map((person) => (
      <Person key={person.id} person={person} />
    ))
    return <div>{personList}</div>
  }
}
