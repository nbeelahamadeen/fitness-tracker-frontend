
import React, { useState, useEffect } from "react";
import Register from "./registration";
import {routinesO } from "./routines";
import { token, exchangeTokenForUser } from "./../../src/index"
import { HashRouter, Routes, Route, Link, Navigate} from 'react-router-dom';




const Home = () => {
    
//     return (
//         <div>
//           <h1 className='title'>Fitness Tracker</h1>
//           <nav className='links'>
//             {/* <Link to='/routines'>Routines ({routinesO.length})</Link> */}
//             {/* <Link to='/login'>{ token ? "Messages" : "Login"}</Link>
//             {token ? null : <Link to='/register'>Register</Link> } */}
//             {/* <Link to='activities'>Activities({activities.length})</Link> */}

//           </nav>
            
//           <Routes>
//             <Route exact path='/' element={<Navigate to='/routines'/>}/>
//             <Route path='/myroutines' element={<div ></div>} />
//             <Route path='/login' element={<div></div>} />
//             <Route path='/register' element={<div><Register exchangeTokenForUser = {exchangeTokenForUser}/></div>} />
//           </Routes>
//         </div>
//       );
}

// export default Home;