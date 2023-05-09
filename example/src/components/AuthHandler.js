import React, { useState } from 'react'

function AuthHandler() {
    const [isLogged, setIsLogged] = useState(true)
    const history = history()

    if(!localStorage.getItem('token')){ 
        setIsLogged(false);
    }
    
    const handleLogin = () =>{

    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }


  return (
    <div>
        {isLogged ? (
            <button onClick={handleLogout}>Logout</button>
        ) :(
            <button><Login />Login In</button>
        )}
      
    </div>
  )
}

export default AuthHandler
