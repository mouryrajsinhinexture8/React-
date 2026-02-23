import React from 'react';
import './RealWorldDemo.css';

class RealWorldDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null,
    };
    // For cancelling the fetch request on unmount
    this.abortController = new AbortController();
  }

  fetchUserData = (userId) => {
    this.setState({ loading: true, error: null });
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: this.abortController.signal,
    })
      .then(response => response.json())
      .then(data => this.setState({ user: data, loading: false }))
      .catch(error => {
        if (error.name !== 'AbortError') {
          this.setState({ error: error.message, loading: false });
        }
      });
  };

  // --- Lifecycle Methods in Action ---

  componentDidMount() {
    console.log('RealWorldDemo: componentDidMount() - Fetching initial data.');
    this.fetchUserData(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      console.log('RealWorldDemo: componentDidUpdate() - User ID changed. Fetching new data.');
      this.fetchUserData(this.props.userId);
    }
  }

  componentWillUnmount() {
    console.log('RealWorldDemo: componentWillUnmount() - Aborting any pending API calls.');
    this.abortController.abort();
  }

  render() {
    const { user, loading, error } = this.state;

    let content;
    if (loading) {
      content = <p className="status">Loading user profile...</p>;
    } else if (error) {
      content = <p className="error">Error: {error}</p>;
    } else if (user) {
      content = (
        <div className="user-profile">
          <h4>{user.name} (@{user.username})</h4>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
        </div>
      );
    }

    return (
      <div className="real-world-demo">
        <h2>Real World API Example</h2>
        {content}
      </div>
    );
  }
}

export default RealWorldDemo;