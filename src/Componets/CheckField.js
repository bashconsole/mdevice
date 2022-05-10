import React from "react";

export default class CheckField extends React.Component {
  check = this.props.checking;
  chengeStatus(id) {
    this.check = !this.check;
    document.getElementById(id).checked = this.check;
    return !this.check;
  }
  render() {
    return (
      <p onClick={() => this.chengeStatus(this.props.id)}>
        <span> {this.props.text}</span>
        <input
          id={this.props.id}
          style={{ float: "right" }}
          type="checkbox"
          checked={this.check}
          //onClick={() => this.chengeStatus(this.props.id)}
        />
      </p>
    );
  }
}
