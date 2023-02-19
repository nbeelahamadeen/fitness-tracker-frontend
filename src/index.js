import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { getAllRoutines, createRoutines, createActivity } from "./api";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Routines from "./components/routines";
import Activities from "./components/activities";
import MyRoutines from "./components/myroutines";
import RoutineForm from "./components/routineForm";
import ActivitiesForm from "./components/activitesForm";

const App = () => {
  const [user, setUser] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const getRoutines = async() => {
 const response = await fetch("http://fitnesstrac-kr.herokuapp.com/api/routines", {
      headers: {
        "Content-Type": "application/json",
      },
    })
     const result = await response.json();
     setRoutines(result);
  };

  const exchangeTokenForUser = () => {
    // take token from localstorage
    const token = window.localStorage.getItem("token"); // we could name it different
    setToken(token);
    if (token) {
      fetch("http://fitnesstrac-kr.herokuapp.com/api/users/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          const user = result; //user is used to save user information
          setUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getRoutines()
    exchangeTokenForUser();
    // getActivities()
  }, [token]);

  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
  };
  return (
    <div>
      <h1 className="title">Fitness Tracker</h1>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/login">{token ? "My Routine" : "Login"}</Link>
        {token ? null : <Link to="/register">Register</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<div><Home/></div>} />
        
        <Route
          path="/routines"
          element={
            <div>
              <Routines routines={routines} />
            </div>
          }
        />
        <Route
          path="/activities"
          element={
            <div>
              <Activities token={token} />
            </div>
          }
        />
        <Route
          path="/myroutines"
          element={
            <div>
              <MyRoutines user={user} routines={routines} />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <Login
                setToken={setToken}
                user={user}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
                exchangeTokenForUser={exchangeTokenForUser}
                token = {token}
              ></Login>
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div>
              <Register exchangeTokenForUser={exchangeTokenForUser} />
            </div>
          }
        />
        <Route
          path="/myroutines/routineForm"
          element={
            <div>
              <RoutineForm
                createRoutines={createRoutines}
                user={user}
                routines={routines}
              />
            </div>
          }
        />
        <Route path="/activities/activitiesForm" element={<div><ActivitiesForm  createActivity ={createActivity} token={token}/></div> }/>
      </Routes>
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
