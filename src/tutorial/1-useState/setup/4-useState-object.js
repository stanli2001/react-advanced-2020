import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "hello",
  });
  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState('hello');

  //the three-dot operator can be used to preserve the values of the key of an object
  //so it is possile to selectively change the value of the key of an object
  const changeMessage = () => {
    if (person.message === "hello") {
      setPerson({ ...person, message: "hello world" });
    } else {
      setPerson({ ...person, message: "hello" });
    }

    // console.log(person.message);
  };

  const changeName = () => {
    if (person.name === "peter") {
      setPerson({ ...person, name: "peter world" });
    } else {
      setPerson({ ...person, name: "peter" });
    }

    // console.log(person.message);
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeName}>
        Change Name
      </button>
    </>
  );
};

export default UseStateObject;
