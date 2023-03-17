import React from "react";
import { login } from "../root/firebase_config";
import { useNavigate } from "react-router-dom";
import "./login.css";
export default function Login() {
  let navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container mt-5 p-3">
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Lütfen email adresinizi giriniz
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            autoFocus
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Lütfen şifrenizi giriniz
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            required
          ></input>
        </div>
        <div className="justify-content-end mx-3" style={{ display: "flex" }}>
          <button type="submit" className="btn btn-primary">
            Giriş Yap
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
            Henüz üye değilseniz{" "}
            <span
              className="span"
              onClick={() => {
                navigate("/register");
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
