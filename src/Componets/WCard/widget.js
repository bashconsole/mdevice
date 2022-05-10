import React from "react";
import { render } from "react-dom";

export default class Widget extends React.Component {
  render() {
    return (
      <div
        style={{
          //background: "#1d1d1d",
          //paddingRight: "0px",
          //width: "100%",
          marginTop: "35px",
          overflow: "clip",
          display: "inline",

          //background: "rgb(59,58,125)",
          //background:
          //  "linear-gradient(4deg, rgba(59,58,125,0.9671218829328606) 12%, rgba(148,187,233,1) 86%)",

          float: "left",
          //border: "1px solid #CCC",
          //borderRadius: "6px",
          //boxShadow: "3px 4px 10px #999"
          borderBottom: "1px solid #CCC"
          //transformStyle: "preserve-3d",
          //transform: "rotate(30deg)"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
