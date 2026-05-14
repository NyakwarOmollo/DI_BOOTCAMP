import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      inputValue: '',
      responseMessage: ''
    };
  }

  // Part I: Fetch GET request on mount
  componentDidMount() {
    this.fetchHello();
  }

  fetchHello = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/hello');
      const data = await res.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Part II: Handle form input change
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // Part II: POST request
  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: this.state.inputValue })
      });

      const data = await res.json();
      this.setState({ responseMessage: data.message });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  render() {
    return (
      <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>React + Express Communication</h1>

        {/* Part I: Display GET Response */}
        <div className="mb-5">
          <h3>Message from Express Server:</h3>
          <h4 style={{ color: 'blue' }}>{this.state.message || "Loading..."}</h4>
        </div>

        <hr />

        {/* Part II: Form + POST */}
        <h3>Send Data to Express Server</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type something..."
            value={this.state.inputValue}
            onChange={this.handleChange}
            style={{ padding: '10px', width: '300px', marginRight: '10px' }}
            required
          />
          <button type="submit" style={{ padding: '10px 20px' }}>
            Send to Server
          </button>
        </form>

        {this.state.responseMessage && (
          <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0' }}>
            <strong>Response from Server:</strong><br />
            {this.state.responseMessage}
          </div>
        )}
      </div>
    );
  }
}

export default App;