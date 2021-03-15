import React, { Component } from "react";
import ReactDom from "react-dom";

interface IProps {}
interface IState {}

class Welcome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  styles = {
    backgroundColor: "Orange",
    color: "White",
    padding: "15px"
  };

  render() {
    return (
      <div>
        <p style={this.styles}>Hello from Welcome Component</p>
        <p> {this.props.message} </p>
        <button onClick={() => {this.props.getChildData("I am coming from Child Component")}}> Click Me </button>
      </div>
    );
  }
}

export default Welcome;
