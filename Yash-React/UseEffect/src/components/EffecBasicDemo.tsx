import React, { useEffect } from "react";

const EffectBasic: React.FC = () => {

  // This effect runs after every render
  useEffect(() => {
    console.log("Component rendered and effect executed");
  });

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>Basic useEffect Example</h2>
      <p>Open console to see when effect runs.</p>
    </div>
  );
};

export default EffectBasic;