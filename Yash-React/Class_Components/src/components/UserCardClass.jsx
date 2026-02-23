import React from 'react';
import './UserCardClass.css'; // Import the CSS file

class UserCardClass extends React.Component {
  // 1. The constructor is where you initialize state.
  constructor(props) {
    super(props); // Always call super(props) first.

    // 2. Initialize the state object.
    this.state = {
      count: 0
    };

    // Method 2: Binding in the constructor.
    // We tell JavaScript that `this` inside `handleShowRole` should always refer to this component instance.
    this.handleShowRole = this.handleShowRole.bind(this);
  }

  // Method 1: Public Class Fields Syntax (Arrow Function)
  // `this` is automatically bound correctly.
  handleIncrement = () => {
    // 3. Use this.setState() to update the state.
    this.setState({ count: this.state.count + 1 });
  };

  // This is a regular class method, so it needs to be bound in the constructor.
  handleShowRole() {
    alert(`The role is: ${this.props.role}`);
  }

  render() {
    const { name } = this.props;
    // Get the count from the component's own state.
    const { count } = this.state;

    return (
      // Use the 'card' className from our CSS file.
      <div className="card">
        <h3>{name} (Class Component)</h3>

        <div className="details">
          <p>Button Clicks: {count}</p>
          {/* This works because handleIncrement is an arrow function */}
          <button onClick={this.handleIncrement}>
            Increment
          </button>

          {/* This works because handleShowRole was bound in the constructor */}
          <button onClick={this.handleShowRole}>
            Show Role
          </button>
        </div>
      </div>
    );
  }
}

export default UserCardClass;