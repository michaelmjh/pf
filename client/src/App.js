import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/App.css';

// Containers
import MenuBarTop from './containers/menuBarTop';
import MenuBarBottom from './containers/menuBarBottom';
import PageHome from './containers/pageHome';

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route exact path="/" element={
            <PageHome />}
          />
          <Route exact path="/about" element={
            <PageHome />}
          />
          <Route exact path="/projects" element={
            <PageHome />}
          />
          <Route exact path="/fun" element={
            <PageHome />}
          />
          <Route exact path="/contact" element={
            <PageHome />}
          />
        </Routes>

      </Router>
      <MenuBarTop />
      <MenuBarBottom />
    </>
  )

};

export default App;