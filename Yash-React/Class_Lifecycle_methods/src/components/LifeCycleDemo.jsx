import React from 'react';
import './LifecycleDemo.css';

class LifecycleDemo extends React.Component {
  // 1. Runs first: Initialize state
  constructor(props) {
    super(props);
    console.log('LifecycleDemo: constructor()');
    this.state = {
      user: null,
      message: 'Component is being created...'
    };
  }

  // 3. Runs third: After the component is in the DOM
  componentDidMount() {
    console.log('LifecycleDemo: componentDidMount() - Component is now in the DOM.');
    console.log('Simulating an API call to fetch user data...');

    // This is where you would fetch data from an API.
    // We'll use a timer to simulate a network request.
    setTimeout(() => {
      console.log('Data fetched!');
      this.setState({
        user: { name: 'Yash' },
        message: 'Component has mounted successfully!'
      });
    }, 2000); // 2-second delay
  }

  // 2. Runs second: Returns the JSX to be rendered
  render() {
    console.log('LifecycleDemo: render()');
    const { message, user } = this.state;

    return (
      <div className="lifecycle-demo">
        <h2>Mounting Phase Demo</h2>
        <p>Status: {message}</p>
        <div>
          {user ? (
            <p>Welcome, {user.name}!</p>
          ) : (
            <p className="loading">Loading user data...</p>
          )}
        </div>
        <p><em>Check the browser console to see the lifecycle order.</em></p>
      </div>
    );
  }
}

export default LifecycleDemo;