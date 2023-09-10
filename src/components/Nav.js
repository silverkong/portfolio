import React from "react";
import "../css/components/Nav.css";

const Nav = () => {
  return (
    <header className="header">
      <h1 className="btn-main">EUNBEEN</h1>
      <nav className="gnb">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
