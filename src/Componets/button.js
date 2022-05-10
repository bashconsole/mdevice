import React from "react";
import "./style.css";
export default class Button extends React.Component {
  render() {
    return (
      <div
        class
        Name="btn"
        onClick={() => this.props.handler()}
        styl={{ background: "orange", color: "#FFF", textDecoration: "none" }}
      >
        {this.props.text}
      </div>
    );
  }
}
