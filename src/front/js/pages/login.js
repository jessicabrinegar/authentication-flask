import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    actions.login(email, password).then((resp) => {
      if (resp) {
        navigate("/private");
      } else {
        setEmail("");
        setPassword("");
        alert("Incorrect login information provided.");
      }
    });
  };

  return (
    <div className="vh-100">
      <div
        className="container-fluid text-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <div className="row">
          <div className="col px-0"></div>
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 rounded py-4 px-0"
            style={{
              backgroundColor: "#B04400",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <h3 className="fw-light" style={{ color: "white" }}>
              Login
            </h3>
            <div className="w-100 text-center">
              <input
                className="my-2 rounded border-0"
                style={{ minWidth: "90%", paddingLeft: "2%" }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
              ></input>
            </div>
            <div className="w-100 text-center">
              <input
                className="mb-2 rounded border-0"
                style={{ minWidth: "90%", paddingLeft: "2%" }}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="w-100 text-center">
              <button
                className="border-0 rounded"
                onClick={handleLogin}
                style={{
                  minWidth: "90%",
                  backgroundColor: "white",
                }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="col px-0"></div>
        </div>
      </div>
    </div>
  );
};
