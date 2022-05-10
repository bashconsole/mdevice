import React from "react";

class New extends React.Component {
  TitleView() {
    try {
      if (document.getElementById("pTitle").textContent !== "Новости") {
        document.getElementById("pTitle").textContent = "Новости";
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        {this.TitleView()}
        <ol>
          {this.props.news.map((newItem, i) => (
            <li
              style={{
                fontSize: "1.2em",
                border: "1px  dotted #CCC",
                padding: "10px"
              }}
            >
              <b>{newItem.title}</b>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default New;
