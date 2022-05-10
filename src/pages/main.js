// Окно на главном меню с рекомендациями, новостями

import React from "react";
import ReactDOM from "react-dom";
import Scard from "../Componets/Cards/smallCard";
import FullCard from "../Componets/Cards/fullCard";
//import NavBar from "../Componets/NavList/navList";
//import div from "@mui/material/div";
import Widget from "../Componets/WCard/widget";
import "./style.css";
import Accordion from "../Componets/Acardion";
import TabsView from "../Componets/Tabs/tabs";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  //SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import ModalForm from "../Componets/Modal";

export default class MainPage extends React.Component {
  VVSB = false;
  c = "column__list";
  ui = {
    menu: {
      text: "Меню"
    },
    catalog: {
      text: "Каталог"
    }
  };

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
    { id: "all", text: "Рекомендации", handler: () => this.mainP() },
    {
      id: "inclides",
      text: "Устаовленые",
      handler: () => this.mainP()
    },
    {
      id: "catalog",
      text: "Каталог",
      handler: () => this.viewCatalog()
    }
  ];
  active = "Рекомендации";
  slideNum = 1;

  checkAlias(text) {
    //console.log( "aliases:\t" + this.props.aliases)
    //return text;
    if (text in this.props.aliases) {
      return this.props.aliases[text];
      //console.log(this.props.aliases[text]);
    } else {
      return text;
      //console.log(e);
    }
  }
  viewAcrd(item) {
    return (
      <div
        style={{
          overflowX: "scroll",
          maxHeight: "375px"
          //position: "relative"
          //background: "#2e323f"
        }}
      >
        {/*}
        title={
          this.checkAlias(k) +
          " (" +
          this.props.category[k].length +
          ")"
        }
      >*/}
        {this.props.category[item].map((pn, j) => (
          <div
            className="card__item"
            style={{
              borderBottom: "1px solid #FFF",
              //height: "55px",
              //margin: "10px",
              background: "#1d1d1d",
              color: "#FFF"
              //background: "#FFF"
              //height:"75px"
            }}
            onClick={() => this.viewInfo(this.props.category[k][i])}
          >
            <img
              className="card__img"
              style={{
                width: "32px",
                height: "32px"
                //background: "#CCC"
              }}
              //src={this.props.icons[pn.Name.split("/")[1]]}
              //alt={pn.Name.split("/")[1]}
            />
            <div style={{ marginLeft: "10px" }}>
              <b>
                {" "}
                <span
                  className="card__title"
                  style={{
                    color: "red",
                    color: "#FFF",
                    //width: "100vw",
                    overflow: "clip",
                    fontSize: "1.1em"
                  }}
                  key={pn.Name}
                >
                  {pn}
                </span>
              </b>
            </div>
          </div>
        ))}
      </div>
    );
  }
  viewCatalogInfo(k, i) {
    ReactDOM.render(
      <ModalForm title={k}>
        {this.props.category[k].map((pn, j) => (
          <Scard
            fullInfo={this.props.category[k]}
            //handler={this.viewInfo(this.props.category[k][i])}
            pn={pn}
          />
        ))}
      </ModalForm>,
      document.getElementById("listOve")
    );
  }

  viewCatalog() {
    return (
      <div className={this.c}>
        {Object.keys(this.props.category).map((k, i) => (
          <Widget>
            <Accordion
              style={{
                borderRadius: "1.4em",
                //background: "#1d1d1d",
                color: "#000", //"#FFF",
                //border: "5px outset rgba(0, 255, 100, 0.5)",
                textAlign: "center"
              }}
              // Список рекомендуемых пакетов в категории
              title={
                this.checkAlias(k) + "\t\t" + this.props.category[k].length
              }
              className="column__list"
              handler={this.viewCatalogInfo(k, i)}
            >
              <div
                id={k}
                style={{
                  overflowX: "scroll",
                  maxHeight: "375px",
                  position: "fixed", // "relative"
                  background: "#000" //"#2e323f"
                }}
              >
                {/*}
                  title={
                    this.checkAlias(k) +
                    " (" +
                    this.props.category[k].length +
                    ")"
                  }
                >*/}
              </div>
            </Accordion>
          </Widget>
        ))}
      </div>
    );
  }

  TitleView() {
    try {
      if (document.getElementById("pTitle").textContent !== "Главная") {
        document.getElementById("pTitle").textContent = "Главная";
      }
    } catch (e) {
      console.log(e);
    }
  }

  mainP() {
    this.TitleView();

    return (
      <div
        id="HomePage"
        className=""
        style={{ overflowY: "scroll", paddingBottom: "60px" }}
      >
        <div
          className={this.c}
          style={{
            //marginTop: "35px",
            overflowY: "scroll"
            //display: "inline-",

            //float: "left",
            //border: "1px solid #CCC",
            //borderRadius: "6px",
            //boxShadow: "3px 4px 10px #999"
          }}
        >
          {/*
          <Widget>
            <h3
              style={{
                borderBottom: "1px solid #AAA",
                background: "#1d1d1d",
                color: "#FFF"
              }}
            >
              {" "}
              Новости
            </h3>

            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
          </Widget>
          <Widget
            className="column__list"
            style={{
              marginTop: "35px",
              overflow: "clip",
              display: "inline-",

              //float: "left",
              //border: "1px solid #CCC",
              //borderRadius: "6px",
              boxShadow: "3px 4px 10px #999"
            }}
          >
            <h3
              style={{
                borderBottom: "1px solid #0F0",
                background: "#1d1d1d",
                color: "#FFF"
              }}
            >
              Уведомления
            </h3>

            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
          </Widget>*/}
        </div>
        <div className="">
          <div className={this.c}>
            {Object.keys(this.props.rec).map((k) => (
              <Widget>
                <Accordion
                  style={{
                    //borderRadius: "1.4em",
                    //background: "#1d1d1d",
                    color: "", //"#FFF",
                    //border: "5px outset rgba(0, 255, 100, 0.5)",
                    textAlign: "center"
                  }}
                  // Список рекомендуемых пакетов в категории
                  title={k + "\t\t" + this.props.rec[k].length}
                  className="column__list"
                >
                  <div
                    style={{
                      overflowX: "scroll",
                      maxHeight: "375px",
                      position: "fixed"
                      //background: "#FFF", //"#2e323f"
                    }}
                  >
                    {this.props.rec[k].map((pn, i) => (
                      <div
                        className="card__item"
                        style={{
                          borderBottom: "1px solid #FFF",
                          //height: "55px",
                          //margin: "10px",
                          background: "#FFF", //"#1d1d1d",
                          color: "#000" //"#FFF"
                          //background: "#FFF"
                          //height:"75px"
                        }}
                        onClick={() => this.viewInfo(this.props.rec[k][i])}
                      >
                        <img
                          className="card__img"
                          style={{
                            width: "32px",
                            height: "32px"
                            //background: "#CCC"
                          }}
                          src={this.props.icons[pn.Name.split("/")[1]]}
                          alt={pn.Name.split("/")[1]}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <b>
                            {" "}
                            <span
                              className="card__title"
                              style={{
                                color: "red",
                                //width: "100vw",
                                overflow: "clip",
                                fontSize: "1.1em"
                              }}
                              key={pn.Name}
                            >
                              {pn.Name.split("/")[1]}
                            </span>
                          </b>
                          <div style={{ overflow: "clip" }}>
                            {pn.Description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion>
              </Widget>
            ))}
            <div
              id="info"
              style={{
                position: "fixed",
                top: "0px",
                left: this.posiLetf,
                width: "100%",
                height: "100%",
                background: "#2e323f",
                display: "none"
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  viewSideBar() {
    if (!this.VVSB) {
      document.getElementById("MainContent").style.paddingLeft = "300px";
      document.getElementById("btn-toggle").style.float = "right";
      document.getElementById("navBar").style.left = "0px";
      this.VVSB = true;
    } else {
      document.getElementById("MainContent").style.paddingLeft = "0px";
      document.getElementById("navBar").style.left = "-280px";
      this.VVSB = false;
    }
  }

  viewInfo(pkg) {
    //onClick={() => this.props.ViewPackageInfo(this.props.rec[k][i])}
    document.getElementById("backBtn").style.display = "block";
    //document.getElementById("pTitle").textContent = pkg.Name.split("/")[1];
    document.getElementById("container").style.display = "none";

    document.getElementById("containerInfo").style.display = "block";

    ReactDOM.render(
      <FullCard
        PackageName={pkg}
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
