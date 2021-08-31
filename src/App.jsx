import React, { Component } from "react";
import "./style/style.scss";
// import Slider from "./components/Slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };

  rst = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App">
        <div className="result">{this.state.count}</div>
        <button onClick={this.inc}>inc</button>
        <button onClick={this.dec}>dec</button>
        <button onClick={this.rst}>rst</button>
      </div>
    );
  }
}

export default App;
