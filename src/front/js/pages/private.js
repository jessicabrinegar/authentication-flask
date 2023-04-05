import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Private = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="container text-center mt-5">
      <h1>This is a private page! You are sucessfully logged in!</h1>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
