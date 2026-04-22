import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ fixed credentials
    if (username === "user@123" && password === "abc123") {
        navigate("/DashBoard")
    } else {
      alert("Invalid Credentials ❌ Please use username='user@123' and password='abc123' ");
    }
  };

  return (
    <div className="auth-container">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <form className="auth-card" onSubmit={handleSubmit}>
        <button type="button" className="logo-button" onClick={() => navigate("/")} style={{borderRadius:100, width:40, height: 40, display:"flex", justifyContent:"center", alignItems:"center", marginBottom:20}}>
          <img 
            className="Img1" 
            src="src/Pages/arrow.png" 
            alt="logo"
            style={{width:60, display:"flex", justifyContent:"center", alignItems:"center"}}
          />
        </button>
        <h1 >Login</h1>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/Signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

