import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Routines from "./components/routines";
import Activities from "./components/activities";

const App = () => {
  const [user, setUser] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities]= useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  // const getRoutines = async() => {
  // await fetch("http://fitnesstrac-kr.herokuapp.com/api/routines", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(routines => {
  //       setRoutines(routines);
  //       console.log(routines);
  //     })
  //     .catch(console.error);
  // };



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
          const user = result.data; //user is used to save user information
          setUser(user);
          setIsLoggedIn(true)
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    exchangeTokenForUser();
    // getRoutines();
    // getActivities()
  }, [token]);

  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
  };
  return (
    <div>
      <h1 className='title'>Fitness Tracker</h1>
      <nav className='links'>
      <Link to='/'>Home</Link>
      <Link to='/routines'>Routines</Link>
        <Link to='/login'>{ token ? "My Routine" : "Login"}</Link>
        {token ? null : <Link to='/register'>Register</Link> }

        <Link to="/activities">Activities</Link>
      </nav>
      <Routes>
            <Route path="/" element={<div>Home</div>}/>
            {/* <Route exact path='/' element={<Navigate to='/routines'/>}/> */}
            <Route path="/routines" element={<div><Routines/></div>}/>
            <Route path="/activities" element={<div><Activities/></div>}/>
            <Route path='/myroutines' element={<div ></div>}/>
            <Route path='/login' element={<div><Login setToken={setToken} user = { user } setUser ={ setUser} setIsLoggedIn = {setIsLoggedIn} isLoggedIn={isLoggedIn} ></Login></div>} />
            <Route path='/register' element={<div><Register exchangeTokenForUser = {exchangeTokenForUser}/></div>} />
      </Routes>
    </div>
  );

}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

