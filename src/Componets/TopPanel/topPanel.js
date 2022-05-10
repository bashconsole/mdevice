import React from "react";
import "./style.css";
import Menu from "../menu";
//import find from '../serverses/find';
import Scxard from "../Cards/smallCard";
import Scard from "../Cards/smallCard";
export default class TopPanel extends React.Component {
  find_pkg(pkg) {
    let response = fetch("/find/?q" + pkg);

    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)

      return <Scard rec={response.json} />;
      //json = response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
  render() {
    return (
      <div>
        <header className="top">
          <Menu menuItem={this.props.menuItem} />

          <input
            id="inS"
            name="inS"
            classname="form-control"
            type="text"
            placeholder="Введите имя пакета"
            onChange={(e) => e.target.value}
            style={{
              fontSize: "1.2em",
              margin: "10px",
              //ackground: "#2e233f",
              borderRadius: "15px",
              border: "3px inset #2e322f",
              color: "#CCC"
            }}
          />
        </header>
      </div>
    );
  }
}
