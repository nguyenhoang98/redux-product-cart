import React, { Component } from "react";
import "./Menu.css";
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-logo">
          <a href="http://google.com">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
          <a href="http://google.com">Trang Chủ</a>
        </div>
        <div className="menu-contact">
          <a href="http://google.com">
            <i className="fa fa-user" aria-hidden="true"></i>
            &nbsp; Tài Khoản &nbsp;
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Menu;
