import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import App from './App'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> 
      <App />
    </Router>
  </React.StrictMode>,
);
