// import LifecycleDemo from './components/LifeCycleDemo.jsx';

// function App() {
//   return (
//     <div>
//       <hr />
//       <h1>Lifecycle Lesson</h1>
//       <LifecycleDemo />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import RealWorldDemo from './components/API_LifecycleDemo.jsx';

function App() {
  const [userId, setUserId] = useState(1);
  const [showDemo, setShowDemo] = useState(true);

  return (
    <div>
      <h1>Lifecycle Lesson: Real World</h1>
      <button onClick={() => setShowDemo(s => !s)}>
        {showDemo ? 'Hide Demo' : 'Show Demo'}
      </button>
      <hr />
      {showDemo && (
        <>
          <div>
            <p>Select a user to fetch:</p>
            <button onClick={() => setUserId(1)}>User 1</button>
            <button onClick={() => setUserId(2)}>User 2</button>
            <button onClick={() => setUserId(3)}>User 3</button>
          </div>
          <RealWorldDemo userId={userId} />
        </>
      )}
    </div>
  );
}

export default App;