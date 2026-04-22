import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/login.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
        <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
  <div className="neon-card">
    
    <img 
      src="src/Pages/logo.jpeg" 
      className="logo"
    />

    <div className="title">
        <img src='src/Pages/rabbit.png' style={{width:250}}/>
    </div>
    
    <Link to="/Login" className="login-button">Login</Link>

  </div>
</div>
  )
}

export default LandingPage