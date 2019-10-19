import React from "react";
import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Link from "../Link";


const menu = [
  { href: "/", name: "HOME" },
  { href: "/games", name: "GAMES" },
  { href: "/team", name: "TEAM" },
  { href: "/contact", name: "CONTACT" }
];

export default class Burger extends React.Component {
  state = {
    menuOpen: false
  };
  handleMenuClick = () => {
    this.setState({menuOpen: !this.state.menuOpen});
  };
  handleLinkClick = () => {
    this.setState({menuOpen: false});
  };

  render() {
    const menuItems = menu.map(val => {
      return (
        <Link href={val.href} key={val.name}>
          <MenuItem onClick={this.handleLinkClick}>{val.name}</MenuItem>
        </Link>
      );
    });

    return (
      <React.Fragment>
        <div className="main">
          <div className="menu_button">
            <MenuButton
              open={this.state.menuOpen}
              onClick={this.handleMenuClick}
              color="black"
            />
          </div>
          <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        </div>

        <style jsx>{`
          .menu_button {
            margin-top: 0;
            margin-left: 0;
            z-index: 99;
            opacity: 0.9;
            display: flex;
            align-items: center;
            width: 100%;
            color: white;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
