import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/App.css';

// Containers
import MenuBarTop from './containers/menuBarTop';
import MenuBarBottom from './containers/menuBarBottom';


// Pages

function App() {

  return (
    <>
      <MenuBarTop />
      <p>Page Container</p>
      <MenuBarBottom />
    </>
  )

};

export default App;