import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const resetValue = () => {
    setValue(0);
  };
  const addValue = () => {
    setValue(value + 1);
  };
  const decreaseValue = () => {
    setValue((preValue) => {
      if (preValue <= 0) {
        return 0;
      } else {
        return preValue - 1;
      }
    });
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((preState) => {
        return preState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}></section>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={decreaseValue}>
        decrease
      </button>
      <button className="btn" onClick={resetValue}>
        reset
      </button>
      <button className="btn" onClick={addValue}>
        increase
      </button>
      <section style={{ margin: "4rem 0" }}></section>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>
        complex Increase
      </button>
    </>
  );
};

export default UseStateCounter;
