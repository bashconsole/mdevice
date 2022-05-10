import React from "react";
import ReactDOM from "react-dom";
import OverlayCard from "../Componets/Cards/OverlayCard";
import ModalForm from "../Componets/Modal";
export default class OvItem extends React.Component {
  ViewOvelay(ov) {
    //document.getElementById("container").style.display = "none";
    //document.getElementById("backBtn").style.display = "block";
    document.getElementById("containerInfo").style.display = "block";
    ReactDOM.render(
      <OverlayCard OverlayInfo={ov} title={this.props.title} />,
      document.getElementById("containerInfo")
    );
  }
  addOveray(Name) {
    ReactDOM.render(
      <ModalForm title={Name}>
        <div></div>
      </ModalForm>,
      document.getElementById("containerInfo")
    );
  }
  render() {
    return (
      <div
        align="center"
        className="flex_tab  "
        key={this.props.over.nane}
        style={{
          padding: "10px",
          //margin: "3px",
          marginTop: "5px",
          //width: "100vw",
          display: "inline-flex",
          border: "5px solid #CCC",
          borderRadius: " 10px",
          boxShadow: "3px 4px 10px #CDC"
          //height: "125px"
          //height:"75px"
          //padding: "15px",
          //display: "inline-flex",
          //border: "1px solid #CCC"
          //boxShadow: "3px 4px 10px #CDC"
        }}
      >
        <div
          style={{
            // border: "1px solid #AAA",
            //boxShadow: "3px 4px 10px #CDC",
            borderRadius: "10px",
            width: "100vw"
            //padding: "5px"
          }}
        >
          <span style={{ textAlign: "center", fontSize: "1.4em" }}>
            <b>{this.props.over.name}</b>{" "}
          </span>
          <div
            style={{ height: "32px", textAlign: "left", overflow: "hidden" }}
          >
            <span>{this.props.title.discription}:</span>
            <b>
              <span style={{ overflow: "hidden" }}>
                {this.props.over.description}{" "}
              </span>
            </b>
          </div>
          <div
            className=" btn-group"
            style={{
              //display: "flex",
              //margin: "10px",
              //padding: "0px",
              float: "right",
              color: "#000"
            }}
          >
            <div></div>
            <div
              className="btn"
              style={{
                background: "orange",
                color: "#FFF",
                textDecoration: "none",
                cursor: "pointer"
              }}
              onClick={() =>
                //(document.getElementById(
                // "pTitle"
                //).textContent = this.props.over.name),
                this.ViewOvelay(this.props.over)
              }
            >
              {this.props.title.homepage}
            </div>

            <div
              className="btn"
              style={{ cursor: "pointer" }}
              onClick={() => this.addOverays(this.props.over.name)}
            >
              Добавить
            </div>
          </div>
        </div>
      </div>
    );
  }
}
