import React from "react";

class InfoPage extends React.Component {
  TitleView() {
    try {
      if (document.getElementById("pTitle").textContent !== "О проекте") {
        document.getElementById("pTitle").textContent = "О проекте";
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    this.TitleView();
    return (
      <div className="infoPage" style={{ padding: "10px" }}>
        <h1>Что это?</h1>

        <div
          style={{
            border: "1px dotted #CCC",
            padding: "10px"
          }}
        >
          Это демонстрационая версия GUI для <b>portage</b>
        </div>
        <h1>Основная цель</h1>
        <div
          style={{
            border: "1px dotted #CCC",
            padding: "10px"
          }}
        >
          Снизить порог вхождени для пользовтелей дистрибутивов в основе которых
          лежит пакетный менеджер <b>portage</b>
        </div>
      </div>
    );
  }
}
export default InfoPage;
