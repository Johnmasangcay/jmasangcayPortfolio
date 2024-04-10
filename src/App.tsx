import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from "react-router";
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
        </Routes>
    </>
  )

}

export default App;