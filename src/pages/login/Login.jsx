import React from 'react'
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick=()=>{}
  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
        <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login