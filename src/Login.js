import React, { useState } from 'react'
import './Login.css';

async function loginUser(credentials) {
  const params = new URLSearchParams(credentials)
  console.log("credentials", credentials)
  window.location = `https://github.com/login/oauth/authorize?${params.toString()}`
}

export default function Login() {
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const client_id = "6f968db52cc6f4aa4dec"
  const allow_signup = false

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      // email,
      // password,
      client_id,
      allow_signup,
    });
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        {/* <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label> */}
        <div>
          <button type="submit">Login with GitHub</button>
        </div>
      </form>
    </div>
  )
}
