import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './style/App.css';

// Containers
import MenuBarTop from './containers/menuBarTop';

// Pages

function App() {
  
  const topButtonOptions = [
    {
        'buttonText': 'Home',
        'buttonIcon': '',
        'buttonLink': '/'
    },
    {
        'buttonText': 'About',
        'buttonIcon': '',
        'buttonLink': '/'
    },
    {
        'buttonText': 'Projects',
        'buttonIcon': '',
        'buttonLink': '/'
    },
    {
        'buttonText': 'Fun Things',
        'buttonIcon': '',
        'buttonLink': '/'
    }
]

  return (
    <>
      <MenuBarTop topButtonOptions={topButtonOptions}/>
      <p>Page Container</p>
      <p>Bottom Bar</p>
    </>
  )
  
};

export default App;