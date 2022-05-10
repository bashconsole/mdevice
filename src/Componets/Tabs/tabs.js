import React from "react";
import ReactDOM from "react-dom";

export default class TabsView extends React.Component {
  menuBtn = {
    all: {
      borderBottom: "1px solid #FFF",
      background: "#FFF", // "#1d1d1d",
      color: "#000",
      textDecoration: "none",
      marginLeft: "0px",
      padding: " 10px",
      //borderRight: "1px  solid #FFF",
      cursor: "pointer",
      position: "ralative",
      //left: "-40px",
      //borderRadius: "0px 20px 0px 20px",
      left: "-20px"
      //borderRadius: "10px 20px 0px 0px"
    },
    active: {
      //background: "blue",
      //color: "#FFF",
      textDecoration: "none",
      marginLeft: "0px",
      padding: " 10px",
      //borderRight: "1px solid #FFF",
      borderBottom: "1px solid gold",
      cursor: "pointer",
      position: "ralative",
      left: "-40px"
    }
  };
  active = this.props.menuButton[this.props.activeDefault];

  chechActive(id) {
    for (let p = 0; p < this.props.menuButton.length; p++) {
      if (this.props.menuButton[p].id === this.active) {
        document.getElementById(
          this.props.menuButton[p].id
        ).style.borderBottom = this.menuBtn.active.borderBottom;
        //background ="#00F";
      } else {
        document.getElementById(
          this.props.menuButton[p].id
        ).style.borderBottom = this.menuBtn.all.borderBottom;
      }
    }
  }

  render() {
    return (
      <div
        // className="btn-group"
        style={{
          display: "inline-flex",
          margin: "0px",
          marginTop: "20px",

          fontSize: "1.2em"

          // color: "#000"
        }}
      >
        {this.props.menuButton.map((it, p) => (
          <div
            id={it.id}
            style={this.menuBtn.all}
            onClick={() => (
              (this.active = it.id),
              this.chechActive(it.text),
              console.log(this.active),
              ReactDOM.render(
                this.props.menuButton[p].handler(),
                document.getElementById(this.props.container)
              )
            )}
          >
            {it.text}
          </div>
        ))}
      </div>
    );
  }
}
