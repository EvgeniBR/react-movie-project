import React from "react";
import { Link } from "react-router-dom";

import '../Styles/Header.css'
import Search from './Search'


const Header = () => {

  return (
    <header>
      <div className="header-links">
        <Link className="btn" to="/"> Home</Link>
        <Link className="btn" to="/Popular"> Popular</Link>
        <Link className="btn" to="/latest"> Latest</Link>
      </div>

      <div>
      <Search />
      </div>
    </header>
  );
};

export default Header;
