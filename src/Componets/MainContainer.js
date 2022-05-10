import React from "react";
//import MainPage from "..//../pages/main";
export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    const VVSB = false;
    // const [VVSBar, seViewSidebar] = useState(false);
  }
  viewSideBar() {
    if (!this.VVSB) {
      document.getElementById("MainContent").style.paddingLeft = "300px";
      document.getElementById("btn-toggle").style.float = "right";
      document.getElementById("navBar").style.left = "300px";
      this.VVSB = true;
    } else {
      document.getElementById("MainContent").style.paddingLeft = "0px";
      document.getElementById("navBar").style.left = "-280px";
      this.VVSB = false;
    }
  }
  render() {
    return (
      <div className="page-wrapper chiller-theme toggled">
        <main
          id="MainContent"
          className="page-content"
          style={{ paddingLeft: "0px" }}
        >
          <div
            id="btn-toggle"
            class="btn-toggle"
            onClick={() => this.viewSideBar()}
            style={{}}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </div>
          <div className="container">
            <h2 id="pageTitle" style={{ float: "left" }}>
              {""}
            </h2>
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}
