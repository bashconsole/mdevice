import Accordion from "../Componets/Acardion";
import React from "react";
import ReactDOM from "react-dom";
import OvItem from "../Componets/overlayItem";
import TabsView from "../Componets/Tabs/tabs";
import ModalForm from "../Componets/Modal";
//import Button from "../Componets/button";
//import Grid from "@mui/material/Grid";
const title = { name: "Имя", discription: "Описание", homepage: "Обзор" };
//import "./style.css";
class PageOverlays extends React.Component {
  VVSB = false;

  menuBtn = {
    all: {
      borderBottom: "1px solid #AAA",
      background: "#1d1d1d",
      color: "#FFF",
      textDecoration: "none",
      marginLeft: "0px",
      padding: " 10px",
      borderRight: "1px  solid #FFF",
      cursor: "pointer",
      position: "ralative",
      left: "-40px",
      borderRadius: "0px 20px 0px 20px",
      left: "-20px"
      //borderRadius: "10px 20px 0px 0px"
    },
    active: {
      background: "blue",
      //color: "#FFF",
      textDecoration: "none",
      marginLeft: "0px",
      padding: " 10px",
      borderRight: "1px  solid #FFF",
      cursor: "pointer",
      position: "ralative",
      left: "-40px"
    }
  };
  menuButton = [
    { id: "all", text: "Все", handler: () => this.viewAllOverlay() },
    {
      id: "inclides",
      text: "Подключеные",
      handler: () => this.viewIncludeOverlays()
    },
    {
      id: "catalog",
      text: "Категории",
      handler: () => this.viweCategotyOverlays()
    }
  ];
  active = 0;
  slideNum = 1;
  //routing overalays page
  viewAllOverlay() {
    this.TitleView();

    //this.chechActive(this.menuButton[0].text);
    return (
      <div className="column__list">
        {this.props.repositores.all.map((over, i) => (
          <OvItem over={over} title={title} />
        ))}
      </div>
    );
  }

  viewIncludeOverlays() {
    /*document.getElementById(this.menuButton[0].text).style = this.menuBtn.all;

    document.getElementById(
      this.menuButton[1].text
    ).style = this.menuBtn.active;
*/
    /*document.getElementById(this.menuButton[2].text).style = this.menuBtn.all;*/
    console.log(this.props.repositores.include);
    return (
      <div className="column__list">
        {this.props.repositores.include.map((over, i) => (
          <OvItem over={over} title={title} />
        ))}
      </div>
    );
  }
  viweCategotyOverlays() {
    /*document.getElementById(
      this.menuButton[1].text
    ).style = this.menuBtn.active;*/
    return Object.keys(this.props.repositores.categores).map((c) => (
      <Accordion
        title={c + "\t\t" + this.props.repositores.categores[c].length}
      >
        <div className="column__list">
          {this.props.repositores.categores[c].map((over, i) => (
            <OvItem over={over} title={title} />
          ))}
        </div>
      </Accordion>
    ));
  }
  TitleView() {
    try {
      if (document.getElementById("pTitle").textContent !== "Оверлеи") {
        document.getElementById("pTitle").textContent = "Оверлеи";
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div id="HomePage">
        {this.TitleView()}
        <TabsView
          activeDefault={0}
          menuButton={this.menuButton}
          container={"listOve"}
        />

        <div id="listOve">{this.menuButton[0].handler()}</div>
      </div>
    );
  }
}
export default PageOverlays;
