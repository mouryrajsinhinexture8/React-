import React, { useEffect } from "react";

const UnmountExample: React.FC = () => {

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted - Cleanup Ran");
    };
  }, []);

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>Unmount Example</h2>
      <p>Remove this component to see cleanup.</p>
    </div>
  );
};

export default UnmountExample;