import React, { useState, useEffect } from "react";
//useEffect
// by default runs after every re-render
// cleanup function
// second parameter
//Hooks canNOT be put inside if statement
//useEffect(callback function,dependency_array)

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Message(${value})`;
    } else {
      document.title = `No New Message`;
    }
  }, [value]);
  const decreaseHandler = () => {
    setValue((preValue) => {
      console.log("preValue=" + preValue);
      if (preValue <= 0) {
        return 0;
      }
      return preValue - 1;
    });
  };
  const resetValue = () => {
    setValue(0);
  };
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
      <button className="btn" onClick={resetValue}>
        reset
      </button>
      <button className="btn" onClick={decreaseHandler}>
        decrease
      </button>
    </>
  );
};

export default UseEffectBasics;
