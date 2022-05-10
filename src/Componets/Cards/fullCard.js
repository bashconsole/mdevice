import React from "react";
import ReactDOM from "react-dom";
//import { Link } from "react-router-dom";
//import { MainPage } from "../../pages/main";
import Accordion from "../Acardion";
import ModalForm from "../Modal";
import "./style.css";
import TabsView from "../Tabs/tabs";
class FullCard extends React.Component {
  ui = {
    name: "Имя",
    category: "Категория:",
    versions: "Доступные версии",
    uses: " USE:",
    decription: "Описание:",
    site: "Сайт:",

    InstallButton: {
      text: "Установить"
    }
  };
  menuButton = [
    //{ id: "all", text: "Рекомендации", handler: () => this.mainP() },
    {
      id: "view",
      text: "Обзор",
      handler: () => this.mainP()
    },
    {
      id: "media",
      text: "Фото и видео",
      handler: () => this.viewMedia()
    },
    {
      /*
      id: "site",
      text: this.ui.site,
      handler: () => this.viewSite()
      */
    }
  ];
  active = "Рекомендации";
  slideNum = 1;

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

  langs = [
    { title: "RU", link: "" },
    { title: "EN", link: "" },
    { title: "DE", link: "" }
  ];

  isMobile() {
    return navigator.userAgentData.mobile;
  }

  IntstallPackageParamms = {
    NamePackage: this.props.PackageName.Name,
    Version: "",
    USE: [],
    TargetUses: {}
  };

  toBack() {
    // document.getElementById("pTitle").textContent = "Главная";
    document.getElementById("containerInfo").style.display = "none";
    document.getElementById("container").style.display = "block";
  }

  vInstall() {
    document.getElementById("containerInfo").display = "block";

    if (this.IntstallPackageParamms.Version !== "") {
      ReactDOM.render(
        <ModalForm
          title={this.props.PackageName.Name}
          root={this.props.PackageName}
          PropMain={this.props.rec}
          icons={this.props.icons}
          useDes={this.props.useDes}
          Ipkg={this.props.Ipkg}
        >
          <div className="sCard">
            <h1 className="title"> </h1>

            <div
              style={{
                flex: "3",
                //display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <img
                src={
                  this.props.icons[this.props.PackageName.Name.split("/")[1]]
                }
                style={{
                  width: "128px",
                  height: "128px",
                  float: "left",
                  marginRight: "20px"
                }}
                alt={this.props.PackageName.Name.split("/")[1]}
              />
            </div>
            <div
              style={{
                flex: "9"
                /*float: "left" */
              }}
            >
              <span>
                {" "}
                <b>{this.ui.category}</b>{" "}
                {this.props.PackageName.Name.split("/")[0]}
              </span>
              <div className="cVer" style={{ float: "flex" }}>
                <b>{this.ui.versions}:</b>
                {this.IntstallPackageParamms.Version}
              </div>
              <div style={{}}>
                <Accordion title={this.ui.uses}>
                  <div
                    className="sUse"
                    style={{
                      overflowY: "scroll",
                      maxHeight: "150px",
                      background: "#EEE"
                    }}
                  >
                    {this.IntstallPackageParamms.USE.map((u, j) => (
                      <span style={{ padding: "3px" }} key={u} id={u}>
                        {this.chech_targent(u)}
                      </span>
                    ))}
                  </div>
                </Accordion>
              </div>
              <div>
                <b>
                  <div id="useInfo" className="useInfo" style={{}}></div>
                </b>
              </div>
              <div>
                <p>
                  <b>{this.ui.decription}</b>{" "}
                  {this.props.PackageName.Description}
                </p>
              </div>
              <div className="Btm">
                <strong>
                  <span
                    className="btn right"
                    id={this.props.PackageName.Name}
                    style={{ cursor: "pointer" }}
                    onClick={() => this.vInstall()}
                  >
                    {this.ui.InstallButton.text}
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </ModalForm>,
        document.getElementById("containerInfo")
      );
    } else {
      let statblVer = "";
      for (let v = 0; v < this.props.PackageName.version.length; v++) {
        if (this.props.PackageName.version[v].split("[U]")[1] === "") {
          statblVer = this.props.PackageName.version[v].split("[U]")[0];
        }
      }
      this.IntstallPackageParamms.Version = statblVer;
      this.vInstall();

      ReactDOM.render(
        <ModalForm
          title={"Error"}
          root={this.props.PackageName}
          PropMain={this.props.rec}
          icons={this.props.icons}
          useDes={this.props.useDes}
          Ipkg={this.props.Ipkg}
        >
          <div
            style={{
              background: "#F00",
              color: "#000",
              padding: "20px",
              fontSize: "1.1em"
            }}
          >
            Error
          </div>
        </ModalForm>,
        document.getElementById("containerInfo")
      );
    }
  }

  addUse(use) {
    if (
      document.getElementById(use).style.background === "#0F0" ||
      document.getElementById(use).style.background === "rgb(0, 255, 0)"
    ) {
      document.getElementById(use).style.background = document.getElementById(
        "containerInfo"
      ).style.background;
      for (let i = 0; i < this.IntstallPackageParamms.USE.length; i++) {
        console.log(i);
        if (use === this.IntstallPackageParamms.USE[i]) {
          this.IntstallPackageParamms.USE.slice(i, i); // delete this.IntstallPackageParamms.USE[i];
        }
      }
    } else {
      document.getElementById(use).style.background = "#0F0";
      this.IntstallPackageParamms.USE[
        this.IntstallPackageParamms.USE.length
      ] = use;
    }
    console.log(this.IntstallPackageParamms);
  }
  addVersion(version) {
    console.log(typeof version);
    if (this.IntstallPackageParamms.Version !== "") {
      if (this.IntstallPackageParamms.Version !== version) {
        document.getElementById(
          this.IntstallPackageParamms.Version
        ).style.background = "#FFF";
        this.IntstallPackageParamms.Version = version;
        document.getElementById(
          version
        ).style.background = document
          .getElementById(version)
          .style.border.split("2px solid")[1];
      } else {
        document.getElementById(
          this.IntstallPackageParamms.Version
        ).style.background = "#FFF";
        this.IntstallPackageParamms.Version = "";
      }
    } else {
      this.IntstallPackageParamms.Version = version;
      document.getElementById(
        version
      ).style.background = document
        .getElementById(version)
        .style.border.split("2px solid")[1];
      console.log(this.IntstallPackageParamms);
    }
  }

  checkVersion(item) {
    //console.log(item.split("[U]")[1] === "");
    console
      .log
      //this.props.Ipkgthis.props.PackageName.Name.split("/")[1])
      ();

    if (item.split("[U]")[1] === "") {
      return (
        <span
          key={item}
          id={item.split("[U]")[0]}
          style={{ border: " 2px solid #0F0", marginLeft: "5px" }}
          onClick={() => this.addVersion(item.split("[U]")[0])}
        >
          {item.split("[U]")[0]}
        </span>
      );
    } else {
      return (
        <span
          key={item}
          id={item.split("[M]")[0]}
          style={{ border: "2px solid #F00", marginLeft: "5px" }}
          onClick={() => this.addVersion(item.split("[M]")[0])}
        >
          {item.split("[M]")[0]}
        </span>
      );
    }
  }
  chech_targent(t) {
    let lt = "";
    if (t.split("+").length > 1) {
      lt = t.split("+")[1];
    } else {
      lt = t;
    }
    let targets = ["single_target_", "modules_", "cpu_flags"];

    if (lt.split("single_target_").length > 1) {
      this.IntstallPackageParamms.TargetUses[
        String(t.split("single_target_")[0]).toUpperCase()
      ] = String(t.split("single_target_")[1]);
      return (
        String(t.split("single_target_")[0]).toUpperCase() +
        "=\t" +
        String(t.split("single_target_")[1])
      );
    }
    if (lt.split("modules_").length > 1) {
      this.IntstallPackageParamms.TargetUses[
        String(t.split("_modules_")[0]).toUpperCase()
      ] = String(t.split("_modules_")[1]);
      return (
        String(t.split("_modules_")[0]).toUpperCase() +
        "=\t" +
        String(t.split("_modules_")[1])
      );
    } else if (lt.split("cpu_flags").length > 1) {
      this.IntstallPackageParamms.TargetUses["CPU_FLAGS"] = String(
        t.split("cpu_flags_")[1]
      );
      return "CPU_FLAGS=\t" + String(t.split("cpu_flags_")[1]);
    } else {
      return t;
    }
  }

  VuseInfo(use) {
    //console.log(use);
    //console.log(this.props.useDes);
    //console.log(Object.keys(this.props.uses));
    //document.getElementById(use).style.background = "orange";
    if (use.split("+").length > 1) {
      use = use.split("+")[1];
    }
    if (
      use in this.props.useDes.LocalUSE ||
      use in this.props.useDes.GlobalUSE
      //use.split("+")[1] in this.props.useDes.LocalUSE ||
      //use.split("+")[1] in this.props.useDes.GlobalUSE
    ) {
      if (use in this.props.useDes.LocalUSE) {
        document.getElementById(
          "useInfo"
        ).textContent = this.props.useDes.LocalUSE[use];
        console.log(use);
      } else if (use in this.props.useDes.GlobalUSE) {
        document.getElementById(
          "useInfo"
        ).textContent = this.props.useDes.GlobalUSE[use];
        console.log(use);
      } /*/else {
        document.getElementById("useInfo").textContent = this.props.useDes[
          use.split("+")[1]
        ];
        console.log(this.props.useDes[use.split("+")[1]]);
      }*/
      //document.getElementById(uId).style.background = "orange";
      //alert(this.props.useDes[use]);
    } else {
      document.getElementById("useInfo").textContent = use;
    }
    //document.getElementById("useInfo").textContent = use;
  }
  clear_VuseInfo() {
    for (let i = 0; i < this.IntstallPackageParamms.USE.length; i++) {
      //document.getElementById(use).style.background = ;
      document.getElementById("useInfo").textContent = "";
    }
  }
  viewMedia() {
    return (
      <div>
        <h3>Здесь будут фото</h3>
      </div>
    );
  }
  viewSite() {
    return (
      <iframe
        style={{ width: "100vw", height: "100vh" }}
        src={this.props.PackageName.Home_page}
      ></iframe>
    );
  }
  mainP() {
    return (
      <div className="sCard">
        <div className="title" style={{}}>
          <b style={{ fontSiz: "1.4em" }}>
            {this.props.PackageName.Name.split("/")[1]}
          </b>
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
        <hr />
        <div
          style={{
            flex: "6",
            //display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <img
            // Иконка пакета в карточке
            className="card__img"
            src={this.props.icons[this.props.PackageName.Name.split("/")[1]]}
            style={{
              width: "128px",
              height: "128px",
              align: "middle",
              float: "left",
              marginRight: "20px"
            }}
            alt={this.props.PackageName.Name.split("/")[1]}
          />
        </div>
        <div
          style={{
            flex: "9"
            /*float: "left" */
          }}
        >
          <span>
            {" "}
            <b>{this.ui.category}</b>{" "}
            {this.props.PackageName.Name.split("/")[0]}
          </span>
          <div className="cVer">
            <b>{this.ui.versions}:</b>
            {this.props.PackageName.version.map((v) => this.checkVersion(v))}
          </div>
          <div style={{ padding: "5px" }}>
            <Accordion title={this.ui.uses} style={{}}>
              <div
                className="sUse"
                style={
                  {
                    //overflowY: "scroll",
                    //height: "175px",
                    // width: "100vw",
                    //border: "1px outset #CCC",
                    //display: "inline-flex"
                  }
                }
              >
                {this.props.PackageName.USE.map((u, j) => (
                  <span
                    style={{}}
                    key={u}
                    id={u}
                    onMouseOver={() =>
                      this.VuseInfo(this.props.PackageName.USE[j])
                    }
                    onMouseOut={() => this.clear_VuseInfo()}
                    onClick={() => this.addUse(this.props.PackageName.USE[j])}
                  >
                    {this.chech_targent(u)}
                  </span>
                ))}
              </div>
            </Accordion>
            <b>
              <div
                id="useInfo"
                className="useInfo"
                style={
                  this.isMobile
                    ? this.styleUseinfo.nomob
                    : this.styleUseinfo.mobile
                }
              ></div>
            </b>
            <div>
              <b>Оверлеи:</b>
              <span>{this.props.PackageName.repo}</span>
            </div>
          </div>
          <div>
            <p>
              <b>{this.ui.decription}</b> {this.props.PackageName.Description}
            </p>
            <a href={this.props.PackageName.Home_page}> {this.ui.site} </a>
          </div>
          <div className="Btm">
            <strong>
              <span
                className="btn right"
                id={this.props.PackageName.Name}
                style={{ cursor: "pointer" }}
                onClick={() => this.vInstall()}
              >
                {this.ui.InstallButton.text}
              </span>
            </strong>
          </div>
        </div>
      </div>
    );
  }
  render() {
    this.IntstallPackageParamms.USE = [];
    //document.getElementById("HomePage").style.display = "block";
    return (
      // Карточка пакета с возможностью установки
      <div className="fullCard" style={{ marging: "30px", padding: "40px" }}>
        <TabsView
          activeDefault={0}
          menuButton={this.menuButton}
          container={"card"}
        />
        <div id="card">{this.menuButton[0].handler()}</div>
      </div>
    );
  }
}

export default FullCard;
