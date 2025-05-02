import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (formData.username === "admin" && formData.password === "admin12") {
        navigate("/dashboard");
      } else if (formData.username && formData.password) {
        navigate("/");
      } else {
        setError("Invalid username or password.");
      }
    } else {
      console.log("User Registered:", formData);
      alert("Account created! Now you can log in.");
      setIsLogin(true);
      setFormData({ username: "", password: "", rememberMe: false });
    }
  };

  return (
      <div className="signup-container">
        <div className="signup-box">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <p className="subtext">{isLogin ? "Welcome back!" : "Create an account"}</p>
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <div className="remember-me">
              <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
              />
              <label>Remember me</label>
            </div>
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="signup-btn">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
            <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
  );
};

export default SignUp;