import React, { useState, useEffect } from "react";

const UpdateExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // This runs only when 'count' changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]); // dependency array

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>Update Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default UpdateExample;