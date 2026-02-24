import React, { useEffect } from "react";

const FirstMountExample: React.FC = () => {

  // Empty dependency array []
  // Means run only once after first render
  useEffect(() => {
    console.log("Component Mounted");

  }, []);

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>Component Mounted</h2>
      <p>This message logs only once.</p>
    </div>
  );
};

export default FirstMountExample;