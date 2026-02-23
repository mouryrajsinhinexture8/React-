import './App.css';
import UserCardClass from './components/UserCardClass';

function App() {
  return (
    <div>
      <h1>Class Component Lesson</h1>
      <hr />
      <h2>Part 1: Basic Syntax and Props</h2>
      <UserCardClass name="Yash" role="Learning Class Components" />
      <UserCardClass name="Alice" role="Reviewing Code" />
    </div>
  );
}

export default App;