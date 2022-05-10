import React from "react";
import "./style.css";
export default class Accordion extends React.Component {
  style = {
    uptitle: {
      ontSize: "1.6em",
      padding: "5px",
      cursor: "pointer"
    }
  };

  ViewGroup(id) {
    if (document.getElementById(id + "_group").style.display === "none") {
      document.getElementById(id + "_group").style.display = " block";
      document.getElementById(id + "_ch").textContent = "";
    } else {
      document.getElementById(id + "_group").style.display = "none";
      document.getElementById(id + "_ch").textContent = "...";
    }
  }

  render() {
    return (
      <div
        style={{
          paddingLeft: "10px"
          //border: "1px dotted #CCC",
          //display: "grid"
        }}
      >
        <div
          id={this.props.title}
          class="Accrordion"
          style={this.props.style}
          onClick={() =>
            this.props.handler
              ? this.props.handler
              : this.ViewGroup(this.props.title)
          }
        >
          <h3>
            <b>
              {this.props.title}{" "}
              <span id={this.props.title + "_ch"}>{">"}</span>
            </b>
          </h3>
        </div>
        <div
          id={this.props.title + "_group"}
          style={{ display: "none", cursor: "pointer" }}
        >
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
