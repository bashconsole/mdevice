import React from "react";
import NavBar from "./NavList/navList";
import AuthForm from "../pages/auth/auth";
import MainPage from "../pages/main";
import FullCard from "../Componets/Cards/fullCard";
//import OverlaPage from "../pages/overlays";
import "./style.css";
import ReactDOM from "react-dom";
//import { useState } from "react";

export default class AppContainer extends React.Component {
  ui = {
    BackButton: {
      text: "Назад"
    },
    button: {
      sync: {
        text: "Обновить",
        icon:
          "https://cdn.icon-icons.com/icons2/3168/PNG/512/refresh_arrow_arrows_icon_193535.png"
      }
    }
  };
  //VSB = document.getElementById("navbar")style.display
  Ptitle = () => this.viewSideBar();

  findPakg(pkg) {
    this.viewPakegeInfo(pkg);
  }

  viewPakegeInfo(pkgName) {
    const url = this.props.ServerAddress + "/find?pkg=" + pkgName;
    const response = fetch(url);
    /*try {
      portage_list[pkgName];
    } catch (e) {*/

    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let res = response.json();
      ReactDOM.render(
        <FullCard
          PackageName={res}
          PropMain={this.props.rec}
          icons={this.props.icons}
        />,
        document.getElementById("HomePage")
      );
      document.getElementById("inS").value = "";
    } else {
      console.log("Ошибка HTTP: " + response.status);
      //}
    }

    console.log(pkgName);
  }

  toBack() {
    document.getElementById("backBtn").style.display = "none";
    //document.getElementById("containerInfo").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("pTitle").textContent = this.ViewTitle();
    document.getElementById("pTitle").textContent = "Главная";
    ReactDOM.render(
      <MainPage
        icons={this.props.icons}
        rec={this.props.rec}
        useDes={this.props.useDes}
        Ipkg={this.props.Ipkg}
        repositores={this.props.repositores}
      />,
      document.getElementById("HomePage")
    );

    //window.location.reload();
    //this.ViewTitle();
    //document.getElementById('pTitle').textContent = this.props.menuItems[]
  }

  viewSideBar() {
    // Появление меню слева
    if (document.getElementById("navbar").style.display !== "none") {
      // document.getElementById("MainContent").style.paddingLeft = "300px";
      // document.getElementById("MainContent").width = -"300px";
      //document.getElementById("container").style.width =
      //  String(document.querySelector(".container").offsetWidth - 300) + "px";
      console.log("on");
      //console.log(document.querySelector(".page-content").offsetWidth);
      //document.getElementById("btn-toggle").style.paddingLeft = "270px";
      //document.getElementById("btn-toggle").style.float = "right";
      document.getElementById("navBar").style.display = "none";
      //this.VVSB = true;
    } else {
      //document.getElementById("MainContent").style.paddingLeft = "0px";
      //document.getElementById("container").style.width =
      // String(document.querySelector(".container").offsetWidth + 300) + "px";

      //document.getElementById("btn-toggle").style.paddingLeft = "0px";
      document.getElementById("navBar").style.display = "block"; //left:  "-300px";
      console.log("off");
      //console.log(document.querySelector(".container").offsetWidth);
      //this.VVSB = false;
    }
  }
  btnMenu() {
    return (
      <li>
        <svg
          c
          style={{
            float: "left",
            paddingLeft: "20px",
            paddingRight: "10px"
          }}
          //onClick={() => this.viewSideBar()}
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          height="1.4em"
          width="1.4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </li>
    );
  }
  ViewTitle() {
    // Имя заголовка меню
    for (let i = 0; i > this.props.menuItems.length; i++) {
      if (
        this.props.menuItems[i].url ===
        window.location.href.split(window.location.host)[1]
        //this.props.menuItems[i].url
        //window.location.href.split(window.location.host)[1]
      ) {
        //document.getElementById("pTitle").textContent = this.props.menuItems[i].text;
        this.pTitle = this.props.menuItems[i].text;
      }
      console.log(this.title);
      return (this.pTitle = this.props.menuItems[i].text);
    }
  }

  render() {
    //this.ViewTitle();
    return (
      <div>
        <AuthForm />

        <div className="page-wrapper chiller-theme toggled">
          <ul
            // Верхняя полоса
            id="btn-toggle"
            class="btn-toggle"
            style={{
              display: "inline",
              padding: "5px 0px",
              margin: "0px",
              borderBottom: "1px solid #AAA",
              width: "100%",
              background: "#1d1d1d", //"#2e323f",
              //"1d1d1d",
              // "#2e323f",
              position: "fixed",
              top: "0",
              color: "#FFF",
              zIndex: "1",
              listStyle: "none"
            }}
          >
            {}
            <li>
              <span
                // Кнопка назад
                className="btn"
                id="backBtn"
                style={{
                  padding: "0px 20px 0px 20px",
                  float: "left",
                  color: "#AAA",
                  background: "#FFF",
                  marginRight: "0.85em",
                  fontSize: "1.6em",
                  borderRadius: "0.9em"
                  //border: "1px outset #444",
                  //background: "rgb(78,116,26)",
                  //background: "rgb(78,116,26)",
                  //background:
                  //  "linear-gradient(0deg, rgba(78,116,26,0.5536415249693627) 0%, rgba(229,237,235,0.9093838218881303) 35%)"

                  //borderRadius: ".9em"
                }}
                onClick={() => this.toBack()}
              ></span>
            </li>
            {navigator.userAgentData.mobile
              ? this.btnMenu()
              : console.log("desktop")}
            {/*
            <b>
              <div
                id="pTitle"
                // Заголовок окна. Имеется глюк в том,
                // что имя окна не появляется при обновлении страницы
                style={{
                  float: "left",
                  width: "50vw",
                  marginleft: "20px",
                  textAlign: "center",
                  fontSize: "1.4em",
                  color: "#FFF"
                }}
              >
                {this.PackageName}
              </div>
            </b>
              */}
            {}
            <li>
              <NavBar
                style={{ display: "inline" }}
                ServerAddress={this.props.ServerAddress}
                category={this.props.category}
                menuItem={this.props.menuItems}
                aliases={this.props.aliases}
                Ipkgs={this.props.Ipkg}
              />
            </li>
            <li>
              <div
                className="d6"
                style={{ position: "realative", float: "right", right: "20px" }}
              >
                <form>
                  <input
                    // Кнопка поиска
                    id="inS"
                    name="inS"
                    classname="form-control"
                    type="text"
                    placeholder="Введите имя пакета"
                    onChange={(e) => this.findPakg(e.target.value)}
                    style={{
                      /* fontSize: "1.2em",
                    margin: "10px", */
                      //backgroundColor: "rgba(81, 81, 81, 0.5)",

                      border: "none",
                      //padding: "5px",
                      //ackground: "#2e233f",
                      //borderRadius: "15px",
                      //border: "3px inset #2e322f",
                      color: "#c7c7c7"
                    }}
                  />
                  {/*}
                <div className="button">
                <svg
                    style={{ color: "#FFF" }}
                    class="l-ss-c-element"
                    width="18"
                    height="27"
                    viewBox="0 0 18 27"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      class="l-ss-c-element"
                      fill="#FFF"
                      fill-rule="#FFF"
                      clip-rull="#FFF"
                      //fill-rule="evenodd"
                      //clip-rule="evenodd"
                      d="M11.1897 5.44196V11.9907C11.1897 13.1717 10.2323 14.1291 9.05126 14.1291C7.87025 14.1291 6.91286 13.1717 6.91286 11.9907V5.44196C6.91286 4.26095 7.87026 3.30355 9.05126 3.30355C10.2323 3.30355 11.1897 4.26095 11.1897 5.44196ZM4.37359 5.44196C4.37359 2.85855 6.46786 0.764282 9.05126 0.764282C11.6347 0.764282 13.7289 2.85855 13.7289 5.44196V11.9907C13.7289 14.5741 11.6347 16.6684 9.05126 16.6684C6.46786 16.6684 4.37359 14.5741 4.37359 11.9907V5.44196ZM2.83614 11.0551C2.83614 10.3539 2.26771 9.78547 1.56651 9.78547C0.865309 9.78547 0.296875 10.3539 0.296875 11.0551V12.9262C0.296875 17.3295 3.548 20.9735 7.78077 21.5886V23.8185H6.712C6.0108 23.8185 5.44236 24.387 5.44236 25.0882C5.44236 25.7894 6.0108 26.3578 6.712 26.3578H11.3897C12.0909 26.3578 12.6593 25.7894 12.6593 25.0882C12.6593 24.387 12.0909 23.8185 11.3897 23.8185H10.32V21.5887C14.5532 20.9739 17.8047 17.3298 17.8047 12.9262V11.0551C17.8047 10.3539 17.2363 9.78547 16.5351 9.78547C15.8339 9.78547 15.2654 10.3539 15.2654 11.0551V12.9262C15.2654 16.3584 12.483 19.1408 9.05079 19.1408C5.61853 19.1408 2.83614 16.3584 2.83614 12.9262V11.0551Z"
                    ></path>{" "}
                  </svg>
                </div>*/}
                  <div
                  // className="btn-group"
                  >
                    {
                      // <div className="button search"></div>
                    }
                    <div
                      className="button"
                      style={{
                        justifyContent: "center"
                      }}
                    >
                      <svg
                        class="l-ss-c-element"
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          class="l-ss-c-element"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.3074 8.03846C14.3074 11.3734 11.6039 14.0769 8.26893 14.0769C4.93398 14.0769 2.23047 11.3734 2.23047 8.03846C2.23047 4.70351 4.93398 2 8.26893 2C11.6039 2 14.3074 4.70351 14.3074 8.03846ZM12.331 14.9766C11.139 15.6759 9.75081 16.0769 8.26893 16.0769C3.82941 16.0769 0.230469 12.478 0.230469 8.03846C0.230469 3.59894 3.82941 0 8.26893 0C12.7085 0 16.3074 3.59894 16.3074 8.03846C16.3074 10.2703 15.3978 12.2897 13.9291 13.7463L18.4758 18.2929C18.8663 18.6834 18.8663 19.3166 18.4758 19.7071C18.0853 20.0977 17.4521 20.0977 17.0616 19.7071L12.331 14.9766Z"
                          fill="white"
                        ></path>{" "}
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
            </li>
          </ul>
          <main
            id="MainContent"
            className="page-content"
            style={{
              paddingLeft: "10px",
              margin: "0px",
              width: "100vw",
              height: "100vh",
              //background: "#1d1d1d",
              overflow: "scroll",
              color: "#000"
            }}
          >
            <div
              id="containerInfo"
              style={{
                //position: "fixed",
                //navigator.userAgentData.mobile ? width"100vw": width="20vw"

                width: "100vw",
                height: "100vh",
                display: "none",
                //background: "#1D1D1D",
                overflowY: "scroll",
                color: "#000", //"#FFF",
                right: "0px", //background: "#2e323f"
                //color: "#AAA"
                borderLeft: "1px  solid #CCC",
                marginTop: "20px"

                //paddingLeft: "5px"
                //marginBottom: "20px"
              }}
            >
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
            <div
              id="container"
              className="container"
              style={{
                //float: "left",
                padding: "0px",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                overflow: "scroll",
                marginTop: "38px"
                //                width: "400px"
              }}
            >
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}
