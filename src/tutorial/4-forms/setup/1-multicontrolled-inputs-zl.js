import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


//React allows to put submit action at form or button level
//if submit is at form level then use onSubmit event
//if submit is at button level then use onClick event

//A single callback function can control multiple inputs
//To do so, the name attribute of the input must be as same as the attribute in the state variable
//In this example, at line 15 we defined firstName in the state variable
//the corresponding input for the first name must have its name attribute as firstName
//This is because all the inputs sharing same callback function, which is onChangeHandler
//, and in onChangeHandler when set the value for the state we refer to the name of the input.
//If the name attribute of the input does not match with the name in the state
//then the set function of state will fail

//Line 77 is to deconstructing the person object
//the name and case of deconstructing variable 
//must be as same as it is defined in the state variable

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [people, setPeople] = useState([]);
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
     e.preventDefault();
     //Only when all input fields have values, the state of people will be set
     if (person.firstName && person.email && person.lastName) {
       const newPerson = { ...person, id: uuidv4() };
       setPeople([...people, newPerson]);
       setPerson({ firstName: "", email: "", lastName: "" });
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
              value={person.firstName}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={person.lastName}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, lastName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{lastName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
