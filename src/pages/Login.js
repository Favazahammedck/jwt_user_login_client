import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("user",data.user)      
      window.location.href="/dashboard"
    } else {
      alert("Please Check your username and password");
    }
  }

  return (
    <>
      <div className="container">
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="" onSubmit={loginUser}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
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
                    <input className="submitbtn" type="submit" value="Login" />
                  </div>
                </div>
                <div>
                  <div>
                    <p>Don't_Have_Account?</p>
                  </div>

                  <Link to="/register" style={{textDecoration: 'none'}}>
                    {" "}
                    <label htmlFor="flip">Register_now</label>
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

export default Login;
