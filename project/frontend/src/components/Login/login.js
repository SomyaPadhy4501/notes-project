import React, { useState } from 'react'
import "./login.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:8000/api/auth/login", {
          
      method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken); 
          navigate("/notes");

      }
      else{
          alert("Invalid credentials");
      }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  
return (
  <div className='login_container'>
    <div className="login_form_container">
      <div className='left'>
        <form className='form_container' onSubmit={handleSubmit}>
          <h1>Login to Your Account</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className='input'
            value={credentials.email}
            onChange={onChange}
            required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={credentials.password}
            onChange={onChange}

            className='input' />
         
          <button type="submit" className="green_btn" >
            Sing In
          </button>
        </form></div>
      <div className="right">
        <h1>New Here ?</h1>
        <Link to="/signup">
          <button type="button" className="white_btn">
            Sing Up
          </button>
        </Link>
      </div>
    </div>
  </div>
)
}

export default Login