import './App.css'
// import ImpureComponent from './components/ImpureComponent'
import Propsexample from './components/PropsComponent'
import {Propsexample1} from './components/PropsComponent'
import {Propsexample2} from './components/PropsComponent'
import {Propsexample3} from './components/PropsComponent'
import Counter from './components/FunctionPropsComponent'
import { useState } from 'react'
import usersData from './data/users.json';

function App() {

  // State to store the count for each user, keyed by their id
  const [userCounts, setUserCounts] = useState({});

  // This function is passed DOWN to the Counter component as a prop
  const handleIncrement = (userId) => {
    setUserCounts(prevCounts => ({
      ...prevCounts,
      [userId]: (prevCounts[userId] || 0) + 1
    }));
  };







  return (
    <>
      {/* shows why strict mode is important */}
      {/* <h1>StrictMode Example</h1>
      <ImpureComponent /> */}
      
      <Propsexample name ="Yash" age = {22} />
      <Propsexample1 name ="Yash" age = {22} role = "Software Engineer" />

      <h1>User list from JSON</h1>
      {usersData.map((user, index) => (
        <Propsexample2 
          key = {user.id}
          name = {user.name}
          age = {user.age}
          role = {user.role}
        />
      ))}





{/*        Using spread operator to pass props          */}






      <h1>User list using Spread</h1>
      {usersData.map((user) => (
        <Propsexample3 
          key = {user.id}
          {...user}
        />
      ))}



{/*        Functions as props                          */}
      <h1>User Counters</h1>
      {usersData.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          {/* count (data) and handleIncrement (function) are passed DOWN as props */}
          <Counter
            count={userCounts[user.id] || 0}
            onIncrement={() => handleIncrement(user.id)}
          />
        </div>
      ))}
    </>
  )
}

export default App
