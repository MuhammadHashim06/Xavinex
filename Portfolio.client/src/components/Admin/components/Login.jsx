import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // State to store the form inputs
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == "admin@xavinex.com" && password == "admin@xavinex") {
      navigate("/admin/dashboard");
    }
    // Reset fields (optional)
    setUsername("");
    setPassword("");
  };

  return (
    <div className="loginpage">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Admin Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
