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
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Enter something..."
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseMessage}</p>
      </div>
    );
  }
}

export default App;
