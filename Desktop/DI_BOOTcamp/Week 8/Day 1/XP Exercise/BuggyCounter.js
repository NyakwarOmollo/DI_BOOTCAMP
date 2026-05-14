import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }

    return (
      <h3 onClick={this.handleClick} style={{ cursor: 'pointer' }}>
        Click to increase counter: {this.state.counter}
      </h3>
    );
  }
}

export default BuggyCounter;