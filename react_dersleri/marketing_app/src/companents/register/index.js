import React from "react";
import { register } from "../root/firebase_config";
import { useNavigate } from "react-router-dom";
import "../login/login.css";
export default function Register() {
  let navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    register(email, password).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container mt-5 p-3">
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Lütfen bir email adresi giriniz...
          </label>
          <input
            type="email"
            className="form-control"
            required
            autoFocus
            id="email"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Lütfen bir şifre giriniz...
          </label>
          <input
            type="password"
            className="form-control"
            required
            id="password"
          ></input>
        </div>
        <div className="p-3" style={{ display: "flex", justifyContent: "end" }}>
          <button type="submit" className="btn btn-primary">
            Kaydol
          </button>
        </div>
        <div
          className="m-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label className="form-label">
            Üyeliğiniz var ise{" "}
            <span
              className="span"
              onClick={() => {
                navigate("/login");
              }}
            >
              tıklayınız...
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}
