import React, { Component } from "react";

export default class Target extends Component {

  constructor() {
    super();
    this.state = {
      seen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.isVisible && !this.state.seen) {
      this.setState({ seen: true });
    }
  }

  render() {
    return (
      <div className={`box ${this.props.isVisible ? "visible" : "transparent"} ${this.state.seen ? "seen" : ""}`}>
        {this.props.children}
      </div>
    );
  }
}
