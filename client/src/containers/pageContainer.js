import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../style/pageContainer.css'

// PAGES
import PageHome from '../components/pageHome';
import PageAbout from '../components/pageAbout';
import PageProjects from '../components/pageProjects';
import PageFun from '../components/pageFun';
import PageContact from '../components/pageContact';
import Project from '../components/modalProject';

function PageContainer() {

  return (
    <>
        <div className='page'>
          <Router>
            <Routes>
              <Route exact path="/" element={
                <PageHome />
              } />
              <Route exact path="/about" element={
                <PageAbout />
              }/>
              <Route exact path="/projects" element={
                <PageProjects />
              } />
              <Route exact path="/fun" element={
                <PageFun />
              }/>
              <Route exact path="/contact" element={
                <PageContact />
              }/>
            </Routes>
          </Router> 
        </div>
        
    </>
  )

};

export default PageContainer;