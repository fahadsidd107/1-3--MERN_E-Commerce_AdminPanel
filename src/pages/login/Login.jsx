import React from 'react'

function Login() {
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
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button>Login</button>
    </div>
  )
}

export default Login