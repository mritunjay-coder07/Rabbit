import { Link } from "react-router-dom";
import "../Styles/login.css"; 

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Signup</h1>

        <input type="text" placeholder="Enter name" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />

        <button>Signup</button>

        <p>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;