import React, { useState } from "react";
// short-circuit evaluation
// ternary operator
// {condition ? return when condition is true : return when condition is false}

//In JS, empty string means false
//|| means OR
//&& means AND
const ShortCircuit = () => {
  const [text, setText] = useState("peter");
  const [iserror, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "john doe"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!iserror);
        }}
      >
        toggle error
      </button>
      {iserror && <h1>Error...</h1>}
      {/* ternary operator */}
      {iserror ? (
        <div>
          <h2>There is an error!</h2>
        </div>
      ) : (
        <p>There is no error.</p>
      )}
    </>
  );
};

export default ShortCircuit;
