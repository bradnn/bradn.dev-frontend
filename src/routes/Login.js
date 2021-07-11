import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Login({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push("/account");
        }
    }, [history])

    const loginHandler = async (e) => {
        e.preventDefault();
    
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
    
        try {
          const { data } = await axios.post(
            "/api/v1/auth/login",
            { username, password },
            config
          );
    
          localStorage.setItem("authToken", data.token);
    
          window.location.reload(false);
          history.push("/");
        } catch (error) {
          setError(error.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      };

    return (
        <div className="content">
        <div className="account-container">
      <form onSubmit={loginHandler} className="account-container">
        <h1 className="login-screen__title">Login</h1>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <span className="subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      </div>
    </div>
    )
}

export default Login;