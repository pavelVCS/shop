import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import AuthContextProvider from './context/AuthContext';
import './variables.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
