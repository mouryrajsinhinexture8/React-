import React, { useState, useEffect } from "react";

const NoDependencyExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // No dependency array
  // This runs after EVERY render
  useEffect(() => {
    console.log("Runs always");
  });

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>No Dependency Array Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default NoDependencyExample;