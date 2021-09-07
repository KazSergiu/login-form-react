import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const Header = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1>Qoobus</h1>
        <div className="links-container">
          <Link to="/">Home</Link>
          <Link to="register-page">Create an Account</Link>
          <Link to="login-page">Log In</Link>
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
