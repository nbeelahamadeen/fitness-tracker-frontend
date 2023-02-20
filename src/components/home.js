import ReactDOM from "react-dom/client";

// import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import React from "react";
// import Register from "./registration";
// import {routines } from "./routines";
// import { token, exchangeTokenForUser } from "./../../src/index"
// import { HashRouter, Routes, Route, Link, Navigate} from 'react-router-dom';




const Home = () => {
  return (
          <div>
       <h3 className='title'>Welcome Tracker</h3>
       </div>
  )
}
//   
//     return (
//         <div>
//           <h1 className='title'>Fitness Tracker</h1>
//           <nav className='links'>
//             <Link to='/routines'>Routines ({routines.length})</Link> */
//             <Link to='/login'>{ token ? "Messages" : "Login"}</Link>
//             {token ? null : <Link to='/register'>Register</Link> }
//             <Link to='activities'>Activities({activities.length})</Link>

//           </nav>
            
//           <Routes>
//             <Route path='*' element={<div><Home/></div>} />
//             <Route path='/login' element={<div></div>} />
//             <Route path='/register' element={<div><Register exchangeTokenForUser = {exchangeTokenForUser}/></div>} />
//           </Routes>
//         </div>
//       );
// }
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(
//   <HashRouter>
//     <App />
//   </HashRouter>
// );
export default Home;