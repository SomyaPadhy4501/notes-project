import React , {useState } from 'react'
import { Link } from "react-router-dom";
import './signup.css'
import { useNavigate } from "react-router-dom"

const Signup = () => {
	const [credentials, setCredentials] = useState({name:"" ,email: "", password: ""}) 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
	const {name , email , password} = credentials;
      e.preventDefault();
      const response = await fetch("http://localhost:8000/api/auth/createuser", {
	
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name , email , password})
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
    <div className="signup_container">
			<div className="signup_form_container">
				<div className="lef">
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="whit_btn">
							Sing in
						</button>
					</Link>
				</div>
				<div className="rigt">
					<form className="formm_container" onSubmit={handleSubmit} >
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="name"
							onChange={onChange}
						
							required
							className="inpt"
						/>
					
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={onChange }
							
							required
							className= "inpt"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={ onChange}
							minLength={5}
							required
							className="inpt"
						/>
						<button type="submit" className="gren_btn">
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
  )
}

export default Signup