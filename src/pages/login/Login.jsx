import React from "react";
import './Login.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <div
   style={{
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center",
     height: "100vh",

   }}
      className="login"
    >
      <input
      style={{
        padding: "10px",
        marginBottom: "20px",
      }}
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      style={{
        padding: "10px",
        marginBottom: "20px",
      }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
