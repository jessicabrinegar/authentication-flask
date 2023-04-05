import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [toggle, setToggle] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.logout().then(() => {
      navigate("/");
    });
  };
  useEffect(() => {
    setToggle(!toggle);
  }, [token]);

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
              onClick={handleLogout}
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
