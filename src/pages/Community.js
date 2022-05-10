import React from "react";

//export default class PageCommunity extends React.Component {
class PageCommunity extends React.Component {
  TitleView() {
    try {
      if (document.getElementById("pTitle").textContent !== "Сообщества") {
        document.getElementById("pTitle").textContent = "Сообщества";
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    this.TitleView();
    return (
      <div style={{ padding: "30px" }}>
        {this.TitleView()}
        <div>Calculte Linux</div>
      </div>
    );
  }
}
export default PageCommunity;
