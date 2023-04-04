import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // because useState is asynchronous, need to ensure it's set before registering data
    // if (!data.university) {
    //   data.university = university;
    // }
    actions.registerUser(email, password).then((resp) => {
      if (resp) {
        navigate("/login");
      } else {
        setEmail("");
        setPassword("");
        alert("The email entered is invalid or already registered.");
      }
    });
  };

  return (
    <div className="vh-100 ms-5 mt-5">
      <div
        className="container rounded"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <div className="row">
          <div className="col"></div>
          <div
            className="py-4 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 col-xxl-6 rounded"
            style={{
              backgroundColor: "#B04400",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className="row">
              <div className="col text-center">
                <h3 className="fw-light" style={{ color: "white" }}>
                  Register
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form onSubmit={handleSubmit}>
                  <div className="container" style={{ width: "100%" }}>
                    <div className="row my-2">
                      <div className="col">
                        <input
                          className="w-100 border-0 rounded ps-2"
                          required
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="row my-2">
                      <div className="col mx-0">
                        <input
                          className="w-100 border-0 rounded ps-2 mx-0"
                          required
                          minLength="7"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div>
                      <input
                        className="w-100 my-2 rounded border-0"
                        type="submit"
                        style={{ backgroundColor: "white" }}
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
