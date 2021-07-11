import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import NotFound from "./routes/NotFound";
import HomeScreen from "./routes/Home";
import PlayerScreen from "./routes/Player/Player";
import AccountScreen from "./routes/Account";
import LoginScreen from "./routes/Login";
import RegisterScreen from "./routes/Register";
import TopPlayersScreen from "./routes/TopPlayers";

function App({ history }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
        return;
    }

    const fetchAccountData = async () => {
      const config = {
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("authToken")}`
          }
      }

      try {
        const { data } = await axios.get("/api/v1/user/", config);
        setUser(data.data);
        if (data.data.customColor) {
          document.documentElement.style.setProperty(`--primary-color`, data.data.customColor);
        }

    } catch (error) {
        localStorage.removeItem("authToken");
    }
    }
    fetchAccountData();
  }, [history]);

  return (
    <Router>
      <div className="app">
        <Header user={user} />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/account" component={AccountScreen} />
          <Route exact path="/player/:player" component={PlayerScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/players" component={TopPlayersScreen} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
