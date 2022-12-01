import React from "react";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css'
const Dashboard = () => {
  function logout(){
    localStorage.clear()
  }
  return (
      <>
    <div>
      <h1>Successfully Logged In...</h1>
    </div>
<div className="goBack">
<ul>
<button className="submitbtn" onClick={logout}><Link to="/register">logout</Link></button>
</ul>
</div>
    </>



  )
}

export default Dashboard
