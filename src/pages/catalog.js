import React from "react";

export default class PageCatalog extends React.Component {
  render() {
    return (
      <div>
        <div
          className=" pane  "
          style={{
            width: "100vw",

            textAlign: "center"
          }}
        >
          {Object.keys(this.props.category).map((item, i) => (
            <div>
              <h2
                style={{
                  background: "#2e323f",
                  color: "#AAA",
                  width: "100%"
                }}
                key={item}
                id={item}
                className=" "
                onClick={() =>
                  this.props.ViewListPkgs(this.props.category[item])
                }
              >
                {item}
              </h2>
              <div style={{ display: "grid" }}>
                {this.props.category[item].map((p) => (
                  <span style={{ margin: "10px" }}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
