import React, { Component } from "react";
import ReactDom from "react-dom";

interface IProps {}
interface IState {}

class Welcome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return <div> Hello </div>;
  }
}

export default Welcome;
