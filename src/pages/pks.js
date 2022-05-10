import React from "react";
import { Link } from "react-router-dom";
//mport NavBar from "../Componets/NavList/navList";
import FullCard from "../Componets/Cards/fullCard";

class PkgList extends React.Component {
  render() {
    return (
      <div>
        <span>
          <Link
            className="btn"
            style={{ float: "left", padding: "10px", textDecoration: "none" }}
            to="/"
          >
            Назад
          </Link>
        </span>
        <FullCard PackageName={this.props.PackageName} />
      </div>
    );
  }
}
export default PkgList;
