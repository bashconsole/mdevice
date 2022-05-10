import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  //NavLink
} from "react-router-dom";
//import TopPanel from "./Componets/TopPanel/topPanel";
import AppContainer from "./Componets/AppContainer";
import MainPage from "./pages/main";
import PageOverlays from "./pages/overlays";
import PageSettings from "./pages/settings";
import PageDocs from "./pages/docs";
import New from "./pages/news/news";
//import PkgList from "./pages/pks";
import PageCommunity from "./pages/Community";
import InfoPage from "./pages/info";
// import  style && data
import "./style.css";

//data
import all_pkgs from "./pkg.json";
import icons from "./icons.json";
import News from "./news.json";

import "react-pro-sidebar/dist/css/styles.css";

const news = News.News;
//print(News.News);
//Debug  prtnt
function print(text) {
  console.log(text);
}
//const community = {};
// dataApp

const pkgs = all_pkgs.Catalog;
const overlays = all_pkgs.overlays;
const recovers = all_pkgs.recovers;
const aliases = all_pkgs.aliases;
const useDes = all_pkgs.usesDecription;
const portENV = all_pkgs.EnvPortage;
print(portENV["make.conf"].USE);

export default class App extends React.Component {
  //const [null, setPackage] = useState('');
  AddressServer = "http://127.0.0.1:8000";
  menuItems = [
    // Боковое меню
    {
      name: "home",
      text: "Главная",
      url: "/",
      Component: MainPage,
      params: {
        rec: recovers,
        category: pkgs,
        aliases: all_pkgs.aliases
        //ViewPackageInfo: this.ViewPackageInfo
      }
    },
    //{ name: "catalog", text: "Программы", url: "/catalog" },
    {
      name: "overlays",
      text: "Оверлеи",
      url: "/overlays",
      Component: PageOverlays
    },
    {
      name: "settings",
      text: "Настройки",
      url: "/settings",
      Component: PageSettings
    },
    { name: "docs", text: "Документация", url: "/docs", Component: PageDocs },
    { name: "news", text: "Новости", url: "/news", Component: New },
    {
      name: "comm",
      text: "Сообщества",
      url: "/community",
      Component: PageCommunity
    },
    { name: "info", text: "О проекте", url: "/info", Component: InfoPage }
  ];
  icons_demo = icons.icons;
  PkgName = {};

  checkInstall() {
    let listPort = Object.keys(all_pkgs.all_pkgs);
    let instP = Object.keys(all_pkgs.InstallPkgs);
    for (let n = 0; n > instP.length; n++) {
      if (listPort.split("/")[0] === instP[n]) {
      }
    }
  }

  ViewListPkgs(listpkgs) {
    listpkgs.map((p, i) => console.log(p + "\n"));
    alert(listpkgs.length + "\n" + listpkgs.map((p, i) => String(p) + "\n"));
  }

  //<TopPanel menuItem={this.menuItems} />
  render() {
    return (
      <div ClassName="app">
        <Router>
          {
            //<NavBar category={pkgs} menuItem={this.menuItems} />
          }

          <AppContainer
            ServerAddress={this.AddressServer}
            category={pkgs}
            aliases={aliases}
            menuItems={this.menuItems}
            icons={this.icons_demo}
            rec={recovers}
            useDes={useDes}
            Ipkg={all_pkgs.InstallPkgs}
          >
            {/*
              {/*this.menuItems.map((route) => (
              <Route exact path={route.url} component={route.Component} />
            //))*/}
            <Switch>
              <Route exact path="/">
                <MainPage
                  icons={this.icons_demo}
                  category={pkgs}
                  aliases={aliases}
                  rec={recovers}
                  useDes={useDes} //LocalUSE
                  Ipkg={all_pkgs.InstallPkgs}
                  repositores={overlays}
                />
              </Route>
              <Route path={this.menuItems[1].url} component={PageOverlays}>
                <PageOverlays repositores={overlays} />
              </Route>

              <Route path={this.menuItems[2].url}>
                <PageSettings uses={useDes.GlobalUSE} portENV={portENV} />
              </Route>
              <Route path={this.menuItems[3].url}>
                <PageDocs />
              </Route>

              <Route path={this.menuItems[4].url}>
                <New news={news} />
              </Route>

              <Route path={this.menuItems[5].url}>
                <PageCommunity />
              </Route>
              <Route path={this.menuItems[6].url}>
                <InfoPage />
              </Route>
              {/*              <NavLink path="/pkg">
                {console.log(this.PkgName)}
                <PkgList PackageName={this.PkgName} />
              </NavLink>
              */}
            </Switch>
          </AppContainer>
        </Router>
      </div>
    );
  }
}
