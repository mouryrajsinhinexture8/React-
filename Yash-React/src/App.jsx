// import React from "react";

import Greeting from "./components/greeting";
import React from "react";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };

//     // REQUIRED binding
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={this.increment}>+</button>
//       </div>
//     );
//   }
// }

// export default Counter;


// ////////////////////////////////////////                 differences                ////////////////////////////////////////


// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// }

// export default Counter;


const App = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Greeting name="Yash" age={20} />
    </div>
  );
}

export default App;