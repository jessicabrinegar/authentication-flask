import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <button
            className="btn btn-primary border"
            style={{ backgroundColor: "#B04400" }}
          >
            Home
          </button>
        </Link>
        {token ? (
          <Link to="/">
            <button
              className="btn btn-primary mx-1 border"
              style={{ backgroundColor: "#B04400" }}
            >
              Logout
            </button>
          </Link>
        ) : (
          <div className="ml-auto">
            <Link to="/register">
              <button
                className="btn btn-primary mx-1 border"
                style={{ backgroundColor: "#B04400" }}
              >
                Register
              </button>
            </Link>
            <Link to="/login">
              <button
                className="btn btn-primary mx-1 border"
                style={{ backgroundColor: "#B04400" }}
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
