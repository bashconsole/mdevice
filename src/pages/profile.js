import React from "react";
import Accordion from "../Componets/Acardion";
//import Accordion from "../Componets/Acardion";
export default class UserProfilePage extends React.Component {
  toBack() {
    document.getElementById("conteinerInfo").style.display = "none";
  }
  ViewGroup(group) {
    if (document.getElementById(group + "_group").style.display === "none") {
      document.getElementById(group + "_group").style.display = " block";
    } else {
      document.getElementById(group + "_group").style.display = "none";
    }
  }
  checkPkg(nPkg) {
    if (this.props.Ipkgs[nPkg.spit("/")[0]]) {
      for (let n = 0; n < this.props.Ipkgs[nPkg.spit("/")[0]]; n++) {}
      //return({name: this.props.Ipkgs[nPkg.spit('/')[0]], vers:""})
    } else {
    }
  }
  TitleView() {
    try {
      if (
        document.getElementById("pTitle").textContent !== "Установленные пакеты"
      ) {
        document.getElementById("pTitle").textContent = "Установленные пакеты";
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    //document.getElementById("HomePage").style.display = "block";
    return (
      <div>
        {this.TitleView()}
        {console.log(this.props.Ipkgs)}
        <span
          className="btn"
          id="backBtn"
          style={{
            padding: "0px 20px 0px 20px",
            float: "left",
            color: "#AAA",
            background: "#FFF",
            marginRight: "0.85em",
            fontSize: "1.6em",
            border: "1px outset #444"
            //borderRadius: ".9em"
          }}
          onClick={() => this.toBack()}
        >
          <b> {"<"}</b>
        </span>
        <ul>
          {Object.keys(this.props.Ipkgs).map((name) => (
            <li
              style={{
                textAlign: "left",
                borderBottom: "1px dotted #AAA",
                listStyle: "none"
              }}
            >
              <Accordion
                title={name}
                style={{ background: "#2e323f", color: "#FFF" }}
              >
                {this.props.Ipkgs[name].map((pkg) => (
                  <div
                    style={{
                      width: "80vw",
                      padding: "10px",
                      fontSize: "1.2em",
                      borderBottom: "1px solid #CDC"
                      //background:"#AAA"
                      // #2e323f"
                    }}
                  >
                    {pkg.name}
                    <div
                      className="btn"
                      style={{
                        float: "right",
                        padding: "5px",
                        cursor: "pointer"
                      }}
                    >
                      Удалить
                    </div>
                  </div>
                ))}
              </Accordion>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
