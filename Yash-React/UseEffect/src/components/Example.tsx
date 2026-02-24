import React, { useState, useEffect } from "react";

/*
This component demonstrates:

1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount
4. Dependency array
5. Cleanup function
*/

const CounterWithLifecycle: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Starting Timer...");

    const intervalId = setInterval(() => {
      console.log("Timer running...");
    }, 2000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleaned up before next run or unmount");
    };
  }, [count]);
  // Timer restarts whenever count changes


  return (
    <div style={{
      padding: "30px",
      backgroundColor: "#f0f4ff",
      borderRadius: "10px",
      textAlign: "center",
      width: "350px",
      margin: "20px auto"
    }}>
      <h2>Lifecycle Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>         
    </div>
  );
};

export default CounterWithLifecycle;

