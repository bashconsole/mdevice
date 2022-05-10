import React from "react";

class InstallForm extends React.Component {
  reqInst(param) {
    console.log(param);
  }
  render() {
    return (
      <div className="pane-group installForm">
        <sCard rec={this.props.rec} />
      </div>
    );
  }
}
export default InstallForm;
