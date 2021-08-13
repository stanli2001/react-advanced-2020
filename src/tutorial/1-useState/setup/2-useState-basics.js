import React, { useState } from "react";

//In the code below, the {text} is the hook and controlled by the function setText
//because we defined text and setText by using the useState hook

//When using hook, it is the implicit rule that 
//the component name must be in camelCase if it is leaded by use, eg. useStatebasics
//or it must start with Upper case, eg. Statebasics
//therefore it is better to name the component starting with Upper case

//The definition of the hook must sit inside the component that calls it
const useStatebasics = () => {
  const [text, setText] = useState("Random Title 1");
  const handleClick = () => {
    if (text === "Random Title 1") {
      setText("Hello People!");
    } else {
      setText("Random Title 1");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default useStatebasics;
