import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

interface IProps {
  //name: string;
}
interface IState {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  getChildData = data => {
    alert(data);
  };

  render() {
    return (
      <div>
        <h1> Hello I am From React </h1>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
