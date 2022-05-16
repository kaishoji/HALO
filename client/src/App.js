import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import Register from './component/auth/Register';
import Login from './component/auth/Login';

import Alert from './component/Alert';
// redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
    <Provider store={store}>
        <Router>
          <Navbar />
          
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/registration" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              
            </Routes>
          
        </Router>
      </Provider>
    </>
  );
}

export default App;
