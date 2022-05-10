import React from "react";
import sCard from "../Componets/Cards/smallCard";
class FindPkg extends React.Component {
  render() {
    return (
      <div>
        <sCard rec={this.props.paks} />
      </div>
    );
  }
}

export default FindPkg;
