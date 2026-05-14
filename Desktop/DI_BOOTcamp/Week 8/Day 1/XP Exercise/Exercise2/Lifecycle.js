// Add this inside the same file or create new file

class Child extends Component {
  componentWillUnmount() {
    alert("Child component is unmounted");
  }

  render() {
    return <h3>Hello World!</h3>;
  }
}

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      favoriteColor: "red",
      show: true 
    };
  }

  // ... keep previous methods

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {/* Previous Lifecycle code... */}

        <hr />
        <h2>Exercise 3: Unmounting</h2>
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete Child Component</button>
      </div>
    );
  }
}

export default Lifecycle;