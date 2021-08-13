import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const clearItems = () => {
    setPeople([]);
  };

  //what on display is the newPeople except when the whole page is reloaded
  //the number of person in newPeople decreases each time the clearItem being hit
  const clearItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    console.log("after" + newPeople.length);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>
              {name}{" "}
              <button
                className="btn"
                onClick={() => {
                  clearItem(id);
                }}
              >
                Clear Item
              </button>
            </h4>
          </div>
        );
      })}

      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
