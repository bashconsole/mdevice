import React from "react";
import ReactDOM from "react-dom";
import FullCard from "./Cards/fullCard";

export default class ModalForm extends React.Component {
  styles = {
    modal: {
      //padding: "50px",
      background: "#1d1d1d",
      color: "#FFF",
      position: "fixed",
      top: "50%",
      left: "50%",
      right: "0px",
      WebkitTransform: "translate(50%, -50%)",
      MsTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      boxShadow: "3px 4px 10px #AAA",
      padding: "10px"
    },
    mobile: {
      //padding: "50px",
      background: "1d1d1d",
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      right: "0px",
      WebkitTransform: "translate(50%, -50%)",
      MsTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      boxShadow: "3px 4px 10px #AAA"
      //padding: "10px"
    }
  };
  isMobile() {
    return navigator.userAgentData.mobile;
  }
  closeFunc() {
    ReactDOM.render(
      <FullCard
        PackageName={this.props.root}
        PropMain={this.props.rec}
        icons={this.props.icons}
        useDes={this.props.useDes}
        Ipkg={this.props.Ipkg}
      />,
      document.getElementById("containerInfo")
    );
  }
  render() {
    return (
      <div
        id={this.props.title}
        style={this.isMobile() ? this.styles.mobile : this.styles.modal}
      >
        <div
          style={{ display: "inline", background: "#CDC", fontSize: "0.8m" }}
        >
          <span style={{ fontSize: "1.1em", float: "left", padding: "15px" }}>
            {" "}
            {this.props.title}
          </span>

          <div className="btn-group">
            <div
              style={{ background: "#F00", color: "#FFF", float: "right" }}
              onClick={() => this.closeFunc()}
            >
              X
            </div>
          </div>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
