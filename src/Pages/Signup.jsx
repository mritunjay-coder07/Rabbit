import { Link, useNavigate } from "react-router-dom";
import "../Styles/login.css"; 

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="auth-card">
        <button type="button" className="logo-button" onClick={() => navigate("/Login")} style={{borderRadius:100, width:40, height: 40, display:"flex", justifyContent:"center", alignItems:"center", marginBottom:20}}>
          <img 
            className="Img1" 
            src="src/Pages/arrow.png" 
            alt="logo"
            style={{width:60, display:"flex", justifyContent:"center", alignItems:"center"}}
          />
          </button>
        <h1>Signup</h1>

        <input type="text" placeholder="Enter name" required/>
        <input type="email" placeholder="Enter email" required/>
        <input type="password" placeholder="Enter password" required/>
        <input type="password" placeholder="Confirm password" required/>


        <button>Signup</button>

        <p>
          Already have an account?{" "}
          <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;