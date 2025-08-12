// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure correct import path
import { AuthProvider } from './AuthContext'; // Import AuthProvider

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
