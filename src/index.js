import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link, Navigate} from 'react-router-dom';

// import{default as Home} from './components/Home';
// import{default as Activities} from './components/Activities';
// import{default as Routines} from './components/Routines';
// import{default as MyRoutines} from './components/MyRoutines';
// import{default as Login} from './components/Login';

const App = ()=> {
  return (
    <div>
      <h1 className='title'>Fitness Tracker</h1>
      <nav className='links'>
        <link>Home</link>
        {/* <Link to='/routines'>Routines</Link>
        <Link to='/activities'>Activities</Link>
        <Link to='/login'>Login / Register</Link> */}
      </nav>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
