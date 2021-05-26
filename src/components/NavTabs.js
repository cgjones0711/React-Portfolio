import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul
      className="nav nav-tabs navtabs"
      style={{ backgroundColor: "black", position: "absolute", right: 0 }}
    >
      <div>
        <li className="is-active navtabs">
          <Link to="/home">Home </Link>
        </li>
      </div>
      <li className="navtabs">
        <Link to="/about"> About </Link>
      </li>
      <li className="navtabs">
        <Link to="/projects">Projects </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
