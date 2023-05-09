import React, { useState } from 'react'
import API from '../services/API'

function Login() {
    const [email, setEmail] = useState("")
    const [parola, setParola] = useState("")
  
    const handleLogin = e =>{
        e.preventDefault()
        API.login(email, parola)
        .then(data => {
            localStorage.setItem('token', data.token);
            console.log(data.token);
            window.location.href = '/products';
        })
    }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input id="email"
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}></input>
        <label htmlFor="parola">Parola:</label>
        <input id="parola"
        type="text"
        value={parola}
        onChange={e => setParola(e.target.value)}></input>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login
