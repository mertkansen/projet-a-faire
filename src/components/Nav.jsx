import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

/*
  Grid List.
  1fr each.
*/

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Nav;
