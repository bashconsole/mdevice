import React from "react";

class PageDocs extends React.Component {
  TitleView() {
    try {
      if (document.getElementById("pTitle").textContent !== "Документация") {
        document.getElementById("pTitle").textContent = "Документация";
      }
    } catch (e) {
      console.log(e);
    }
  }

  commands = [
    "cd webport/source",
    "npm install",
    "npm run build",
    "cd ..",
    "sudo npm install --save-dev electron",
    "npx electron .",
    "cp -L sources/build ./",
    "npm install --verbose electron"
  ];

  render() {
    this.TitleView();
    return (
      <div className="settings" style={{ padding: "10px" }}>
        <h1>Сборка React</h1>
        <code
          style={{
            border: "1px dotted #CCC",
            padding: "10px"
          }}
        >
          cd webport/source && npm install && npm run build
        </code>
        <h1>Сборка Electron bin</h1>
        <code
          style={{
            border: "1px dotted #CCC",
            padding: "10px"
          }}
        >
          {this.commands.map((cmd) => (
            <span>
              {cmd + "\t"} +{"&& "} +{"\t"}
            </span>
          ))}
        </code>
      </div>
    );
  }
}
export default PageDocs;
