import React from "react";
import ReactDOM from "react-dom";
import FullCard from "./fullCard";
//import PkgList from "../../pages/pks";
import "./style.css";
//import Swiper from "react-slider-swiper";
//import InstallForm from "../pages/InstallForm";
const ui = { description: "Описание" };

class Scard extends React.Component {
  //Viewinstall(package) {
  //const pkgInfo = this.props.rec[package]
  //return <InstallForm rec={pkgInfo} />;
  //}:
  params = {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 30,
    runCallbacksOnInit: true,
    onInit: (swiper) => {
      this.swiper = swiper;
    }
  };
  /*
  viweinfo(pkg) {
    //onClick={() => this.props.ViewPackageInfo(this.props.rec[k][i])}
    document.getElementById("backBtn").style.display = "block";
    document.getElementById("pTitle").textContent = pkg.Name.split("/")[1];
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
  */
  info() {
    console.log(this.props.fullInfo);
  }
  render() {
    return (
      <div
        className="card__item"
        style={{
          //borderBottom: "1px solid #FFF",
          //height: "55px",
          //margin: "10px",
          background: "#FFF", //"#1d1d1d",
          color: "#000" // "#FFF"
          //background: "#FFF"
          //height:"75px"
        }}
        onClick={() => this.props.handler(this.props.fullInfo)}
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
                //color: "#000", //"#FFF",
                //width: "100vw",
                overflow: "clip",
                fontSize: "1.1em"
              }}
              key={this.props.pn.Name}
            >
              {this.props.pn}
            </span>
          </b>
        </div>
      </div>
    );
  }
}
export default Scard;
