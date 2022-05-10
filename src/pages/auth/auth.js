import React from "react";
import "./style.css";
class AuthForm extends React.Component {
  isMobile() {
    return navigator.userAgentData.mobile;
  }
  render() {
    return (
      <div id="spAuth" className="spAuth ">
        <div className={this.isMobile() ? "formAuth mobile" : "formAuth modal"}>
          <h2>Авторизация</h2>
          <div>
            <p>
              {" "}
              Username: <input type="text" placeholder="demo" />
            </p>
            <p>
              {" "}
              Password:
              <input type="password" placeholder="demo" />
            </p>
            `
            <p>
              {" "}
              Server:
              <input type="password" placeholder={window.location.href} />
            </p>
            <div
              className="authBtn"
              onClick={() =>
                (document.getElementById("spAuth").style.display = "none")
              }
            >
              Войти
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AuthForm;
