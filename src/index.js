import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';


const App = () => {

  return (
    <div>
      <nav>
        <h1>Fitness Tracker</h1>
      </nav>
    </div>
  )
}



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);