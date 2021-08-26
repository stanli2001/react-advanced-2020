import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

//React allows to put submit action at form or button level
//if submit is at form level then use onSubmit event
//if submit is at button level then use onClick event

//put event object as input for the submit function
//and use preventDefault() to tell browser that we will handle the submit

//The value filled in the form is stored by useState hook
//There are 3 steps invovled to achieve that
//step 1: set the value prop of the input tag to refer to the useState variable -- line 52
//step 2: add onChange event listener -- line 53
//step 3: set the callback function with set function of the useState hook  --line 53
//The input of the callback function is event object --line 53
//The filled in content is accessed via event.target.value --line 53

const ControlledInputs = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && email && lastname) {
      const person = { id: uuidv4(), firstname, lastname, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setLastName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstname, lastname, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstname}</h4>
              <h4>{lastname}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
