import { useState } from "react";
import {Link} from 'react-router-dom'
import '../styles/Register.css'
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(event) {
    event.preventDefault();
    const response=await fetch("http://localhost:1337/api/register", {
      method:'POST',
      headers:{
'Content-Type':'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data=response.json();
    console.log("data",data);
  }

  return (
    <>
    <div className="container">
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Register</div>
              <form action="" onSubmit={registerUser}>
                <div className="input-boxes">
                <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      minlength="6"
                      required
                    />
                  </div>
                  <div className="buttonForSubmission">
                    <input className="submitbtn" type="submit" value="Register" />
                  </div>
                </div>
                <div>
                  <div>
                    <p>Already_Have_Account?</p>
                  </div>

                  <Link to="/login" style={{textDecoration: 'none'}}>
                    <label htmlFor="flip">Login_now</label>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
