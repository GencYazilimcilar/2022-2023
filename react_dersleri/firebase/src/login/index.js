import React from "react";
import { auth } from "../root/firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState} from 'react-firebase-hooks/auth';

export default function Index() {
    const [user,loading,error]=useAuthState(auth);
  const onSubmitForm = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    login(email, password);
  };
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.log("Hata: " + error);
      })
      .then((obje) => {
        console.log("Dönen değer: " + obje);
      });
  };
  const onShow = () => {
    console.log(user.email);
  }
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.log("Hata: " + error);
      })
      .then((obje) => {
        console.log("Dönen değer: " + obje);
      });
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        className="aling-content-center justify-content-center form-control"
        style={{ maxWidth: "300px" }}
        onSubmit={onSubmitForm}
      >
        <div className="form-control my-3">
          <label htmlFor="email">Lütfen gmail adresinizi giriniz:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
            autoFocus
          ></input>
        </div>
        <div className="form-control my-3">
          <label htmlFor="password">Lütfen şifrenizi giriniz:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            required
          ></input>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
            <button onClick={onShow} type="button" className="btn btn-primary">
                Show
            </button>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
