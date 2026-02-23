import React from "react";

function Greeting({name,age}) {
  return (
    <h2>
      Hello: {name}, age: {age}.
    </h2>
  );
}

export default Greeting;