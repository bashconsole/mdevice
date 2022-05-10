import "./style.css";
import React from "react";
import Accordion from "../Acardion";

export default class OverlayCard extends React.Component {
  styleUseinfo = {
    mobile: {
      position: "fixed",
      bottom: "0px",
      left: "0px",
      width: "100vw",
      background: "#FFF",
      borderTop: "1px  solid #CDC",
      paddingTop: "5px"
    },
    nomob: { margin: "5px", width: "100vw", display: "inline" }
  };

  toBack() {
    //document.getElementById("pTitle").textContent = "Оверлеи";
    document.getElementById("containerInfo").style.display = "none";
  }
  render() {
    return (
      <div className="sCard" style={{}}>
        <div className="title" style={{}}>
          <b style={{ fontSiz: "1.4em" }}>{this.props.OverlayInfo.Name}</b>
          <span
            className="btn"
            id="backBtn"
            style={{
              padding: "5px",
              float: "left",
              color: "#FFF",
              background: "#F00",
              marginRight: "0.85em",
              fontSize: "0.8em",
              borderRadius: "0.4em"

              //border: "1px outset #444",
              //background: "rgb(78,116,26)",
              // background: "rgb(78,116,26)",
              //background:
              // "linear-gradient(0deg, rgba(78,116,26,0.5536415249693627) 0%, rgba(229,237,235,0.9093838218881303) 35%)"
            }}
            onClick={() => this.toBack()}
          >
            <b style={{ float: "right" }}> {"X"}</b>
          </span>
        </div>
        <div>
          <p style={{ fontSize: "1.4em" }}>
            <b>{this.props.title.discription}:</b>
            {this.props.OverlayInfo.description}
          </p>
          <Accordion title={"Обзор"}>
            <iframe
              style={{ width: "100%", height: " 100vh" }}
              src={this.props.OverlayInfo.homepage}
              seamless="false"
            ></iframe>
          </Accordion>
        </div>
      </div>
    );
  }
}
