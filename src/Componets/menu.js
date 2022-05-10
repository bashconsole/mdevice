import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
class MenuPage extends React.Component {
  styles = { menu: { display: "inline-flex", li: { marginLeft: "20px" } } };
  render() {
    return (
      <ul style={this.styles.menu}>
        {this.props.menuItem.map((item) => (
          <li style={{ padding: "10px", listStyle: "none" }}>
            <b>
              <Link
                key={item.name}
                className=""
                id={item.name}
                to={item.url}
                style={{ color: "#CCC", textDecoration: "none" }}
              >
                {item.text}
              </Link>
            </b>
          </li>
        ))}
      </ul>
    );
  }
}
export default MenuPage;
/*

<MenuItem style={this.styles.menu}>
        <SubMenu title={this.props.title}>
          {this.props.menuItem.map((item) => (
            <MenuItem>
              <Link
                key={item.name}
                className=""
                id={item.name}
                to={item.url}
                style={{ color: "#CCC", textDecoration: "none" }}
              >
                {item.text}
              </Link>
            </MenuItem>
          ))}
        </SubMenu>
      </MenuItem>


*/
