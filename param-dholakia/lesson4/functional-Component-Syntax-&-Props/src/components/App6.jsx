import React, { useState } from 'react';
 
const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', isDone: true },
    { id: 2, title: 'Master Hooks', isDone: true },
    { id: 3, title: 'Build Project', isDone: true },
  ]);
 
  const [isLoggedIn, setIsLoggedIn] = useState(true);
 
  // ALTERNATIVE 1: Standard "if" statement (Must be outside the return)
  if (!isLoggedIn) {
    return <h2>Please log in to see your tasks.</h2>;
  }
 
  return (
    <div>
      <h2>My Tasks</h2>
 
      {/* ALTERNATIVE 2: Logical AND (&&) */}
      {/* Renders the paragraph ONLY if tasks array is empty */}
      {tasks.length === 0 && <p>You have no tasks left! 🎉</p>}
 
      <ul>
        {/* RENDERING ARRAYS: Using .map() */}
        {/* CRITICAL: Every item needs a unique "key" prop */}
        {tasks.map((task) => (
          <li key={task.id}>

            {/* ALTERNATIVE 3: Ternary Operator (? :) */}
            {/* Best for inline if/else logic */}
            {task.isDone ? (
              <del>{task.title}</del>
            ) : (
              <strong>{task.title}</strong>
            )}
 
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default TaskManager;