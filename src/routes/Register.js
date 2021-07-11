import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Register = ({ history}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
          history.push("/");
        }
      }, [history]);

      const registerHandler = async (e) => {
        e.preventDefault();
        
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
    
        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Passwords do not match");
        }
    
        try {
            const { data } = await axios.post("/api/v1/auth/register", {username, email, password}, config);
    
            localStorage.setItem("authToken", data.token);
    
            window.location.reload(false);
            history.push("/");
        } catch (error) {
            setError(error.response);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
      }

      return (
        <div className="content">
            <div className="account-container">
            <form onSubmit={registerHandler} className="account-container">
            <h1 className="register-screen__title">Register</h1>
            {error && <span className="error-message">{error}</span>}
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                required
                id="name"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                required
                id="confirmpassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
    
            <span className="subtext">
              Already have an account? <Link to="/login">Login</Link>
            </span>
            <button type="submit">
              Register
            </button>
    
          </form>
            </div>
          
        </div>
      );
}


export default Register;