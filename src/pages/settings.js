import React from "react";
import Accordion from "../Componets/Acardion";
import CheckField from "../Componets/CheckField";

//import Menu from "../Componets/menu";
/*const menuItm = [
  { name: "portage", text: "portage", url: "/sport" },
  { name: "webpp", text: "App", url: "/app" }
];*/
let act = false;
class PageSettings extends React.Component {
  settings = {
    USE: [],
    lang: "RU"
  };
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
    nomob: { margin: "5px" },
    axtive: { background: "#0F0" },
    noaxive: { background: "#FFF" }
  };
  themes = [
    { id: "0", name: "Светлая", path: "" },
    { id: "1", name: "Тёмная", path: "" }
  ];
  langs = [
    { title: "RU", link: "" },
    { title: "EN", link: "" },
    { title: "DE", link: "" }
  ];
  isMobile() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  changeLang(lang) {
    console.log(lang);
    if (
      document.getElementById(lang).style.background !== "#0F0" ||
      document.getElementById(lang).style.background !== "rgb(0, 255, 0)"
    ) {
      document.getElementById(lang).style.background = "#0F0";

      document.getElementById(this.settings.lang).style.background = "#FFF";
      this.settings.lang = lang;
      //document.getElementById(lang).style.background = "#FFF";

      //this.IntstallPackageParamms.USE.map((us, i)=>(
      //  if( us== use)this.IntstallPackageParamms.USE[i].delete
      //))
    } else {
      document.getElementById(lang).style.background = "#0F0";
      this.settings.lang = lang;
      //this.settings.USE[this.IntstallPackageParamms.USE.length + 1] = use;
    }
    console.log(this.settings);
  }

  addUse(use) {
    console.log(use);
    if (
      document.getElementById(use).style.background === "#0F0" ||
      document.getElementById(use).style.background === "rgb(0, 255, 0)"
    ) {
      document.getElementById(use).style.background = "#FFF";
      /*this.IntstallPackageParamms.USE.map((us, i)=>(
       if(us == use)delete(this.settings.USE[i])
      ))*/
      for (let i = 0; i < this.settings.USE.length; i++) {
        console.log(i);
        if (use === this.settings.USE[i]) {
          this.settings.USE.slice(i, i); // delete this.IntstallPackageParamms.USE[i];
        }
      }
    } else {
      document.getElementById(use).style.background = "#0F0";
      //this.settings.USE[this.IntstallPackageParamms.USE.length] = use;
    }
    console.log(this.settings);
  }
  VuseInfo(uId, use) {
    //console.log(typeof(use));
    console.log(uId);
    //console.log(Object.keys(this.props.uses));

    if (use in this.props.uses) {
      document.getElementById("useInfo").textContent = use;
      //document.getElementById(uId).style.background = "orange";
      //alert(this.props.useDes[use]);
    } else {
      document.getElementById("useInfo").textContent = use;
    }
    //document.getElementById("useInfo").textContent = use;
  }
  TitleView() {
    try {
      if (document.getElementById("pTitle").textContent !== "Настройки") {
        document.getElementById("pTitle").textContent = "Настройки";
      }
    } catch (e) {
      console.log(e);
    }
  }
  checkUses(u) {
    //act = ;
    //for (let n = 0; n > this.props.portENV["make.conf"]["USE"]; n++) {
    if (u in this.props.portENV["make.conf"].USE) {
      //(u === this.props.portENV["make.conf"].USE[n]) {
      //act = true;

      this.settings.USE[this.settings.USE.length + 1] = u;
      console.log(act);
      return (
        <span
          style={this.styleUseinfo.axtive}
          key={u}
          id={u}
          onMouseOver={() => this.VuseInfo(u, this.props.uses[u])}
          onClick={() => this.addUse(u)}
        >
          {u}
        </span>
      );
    } else {
      return (
        <span
          style={this.styleUseinfo.noaxive}
          key={u}
          id={u}
          onMouseOver={() => this.VuseInfo(u, this.props.uses[u])}
          onClick={() => this.addUse(u)}
        >
          {u}
        </span>
      );
    }
    //}

    //console.log(act);
    //console.log(this.settings.USE);
    // this.settings.USE.append();
    /*
    return (
      <span
        style={act ? this.styleUseinfo.axtive : this.styleUseinfo.noaxive}
        key={u}
        id={u}
        onMouseOver={() => this.VuseInfo(u, this.props.uses[u])}
        onClick={() => this.addUse(u)}
      >
        {u}
      </span>
    );*/
  }

  render() {
    this.TitleView();
    return (
      <div id="HomePage" className="settings">
        <div>
          <Accordion title="UI">
            <hr />
            <div>
              <Accordion title={"Темы"}>
                <ul
                  className="btn-group"
                  style={{ display: "inline-flex", listStyle: "none" }}
                >
                  {this.themes.map((t) => (
                    <li id={t.id} style={{ marginLeft: "10px" }}>
                      {t.name}
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>

            <div>
              <Accordion title={"Язык"}>
                <ul
                  style={{ display: "inline-flex", listStyle: "none" }}
                  className="btn-group"
                >
                  {Object.keys(this.langs).map((lng) => (
                    <li
                      id={this.langs[lng].title}
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.changLang(this.langs[lng].title)}
                    >
                      {this.langs[lng].title}
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
          </Accordion>
        </div>
        <Accordion title={"Приложение"}>
          <Accordion title={"Сервер"}>
            <p>
              Адресс сервера <input type="text" placeholder="loaclhost:8000" />{" "}
            </p>
          </Accordion>
        </Accordion>
        <Accordion title={"Portage"}>
          <hr />
          <CheckField
            text={"Искать в Сторонних оврелях"}
            checking={true}
            id={"searchOverlays"}
          />
          <CheckField
            text={"Устанавливать бинарные пакеты"}
            checking={true}
            id={"statrBinInstlPKg"}
          />

          <div className="sUse" style={{ paddingLeft: "20px" }}>
            <Accordion title={"USE"} className="sUses">
              {Object.keys(this.props.uses).map((u, j) => this.checkUses(u))}
              <b>
                <div
                  id="useInfo"
                  className="useInfo"
                  style={
                    this.isMobile ? this.styleUseinfo.mobile : this.style.nomob
                  }
                ></div>
              </b>
            </Accordion>
          </div>
        </Accordion>
      </div>
    );
  }
}
export default PageSettings;
