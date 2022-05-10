import React, { Component } from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  //SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
//import "react-pro-sidebar/dist/css/styles.css";
import MenuPage from "../menu";
import "../../pages/style.css";
import FullCard from "../Cards/fullCard";
import UserProfilePage from "../../pages/profile";
//var view = false;
class NavBar extends Component {
  user = { username: "Demo", userStatus: "Guest" };

  ui = {
    menu: {
      text: "Меню"
    },
    catalog: {
      text: "Каталог"
    }
  };
  styles = {
    desktop: {
      background: "2e323f",
      //position: "ralative",
      display: "inline",
      //display: "none",
      //height: "100%",
      left: "-50px",
      //width: "",
      float: "left"
    },
    mobile: {
      background: "2e323f",
      position: "fixed",
      display: "none",
      height: "100%",
      left: "300px",
      width: "200px"
    }
  };

  viewOther() {
    return (
      <Menu style={{ display: "inline", overflowY: "scroll", width: "200px" }}>
        <MenuPage
          menuItem={this.props.menuItem}
          title={this.ui.menu.text}
          style={{ paddingRight: "0px", float: "left" }}
        />
        <MenuItem
          title={this.ui.catalog.text}
          style={{ paddingRight: "0px", float: "left", overflowY: "scroll" }}
        >
          {/*CATALOG 

          <SubMenu title={this.ui.catalog.text} style={{ overflowY: "scroll" }}>
            {Object.keys(this.props.category).map((k, i) => (
              <MenuItem
                style={{
                  paddingRight: "0px",
                  width: "100vw"
                }}
              >
                {
                  //&#xe2c7;
                }
                <SubMenu
                  title={
                    this.checkAlias(k) +
                    " (" +
                    this.props.category[k].length +
                    ")"
                  }
                >
                  {this.props.category[k].map((pn, j) => (
                    <MenuItem
                      onClick={() =>
                        this.viewPakegeInfo(
                          this.props.category[k][i] +
                            "/" +
                            this.props.category[k][j]
                        )
                      }
                      style={{
                        //borderBottom: "1px solid red ",  &#xe873;
                        width: "100%"
                      }}
                    >
                      {
                        //
                      }
                      {pn}
                    </MenuItem>
                  ))}
                </SubMenu>
                    
              </MenuItem>
            ))}
          </SubMenu>
                    */}
        </MenuItem>
      </Menu>
    );
  }

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
  viewPakegeInfo(pkgName) {
    const url = this.props.ServerAdress + "/find?pkg=" + pkgName;
    console.log(url, { mode: "no-cors" });
    fetch(url, ["POST"])
      .then((response) => response.json())
      // .then(commits => alert(commits[0].author.login))
      .catch((error) => {
        console.error("Error:", error);
      });
    /*try {
      portage_list[pkgName];
    } catch (e) {*/

    document.getElementById("containerInfo").display = "block";
    ReactDOM.render(
      <FullCard
        PackageName={pkgName}
        PropMain={this.props.rec}
        icons={this.props.icons}
      />,
      document.getElementById("containerInfo")
    );

    console.log(pkgName);
  }
  findPakg(pkg) {
    this.viewPakegeInfo(pkg);
  }
  render() {
    return navigator.userAgentData.mobile
      ? this.viewMobile()
      : this.viewOther();
  }
}
export default NavBar;
