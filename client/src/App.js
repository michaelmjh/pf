
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
// Site menu bars
import NavBar from './components/navbar';
import SideBarLeft from './components/sideBarLeft';
import SideBarRight from './components/sideBarRight';
// Pages
import PageHome from './containers/pageHome';
import PageAbout from './containers/pageAbout';
import PageProjects from './containers/pageProjects';
import PageExperience from './containers/pageExperience';
import PageFun from './containers/pageFun';
import PageContact from './containers/pageContact';

function App() {

  const [navbarData, setNavbarData] = useState([])

  useEffect (() => {
    setNavbarData(nbData)
  }, []);

  var nbData = [
    ['Home', '/', <PageHome />],
    ['About', '/about', <PageAbout />],
    ['Projects', '/projects', <PageProjects />],
    ['Other Experience', '/experience', <PageExperience />],
    ['Fun Stuff', '/fun', <PageFun />],
    ['Contact', '/', <PageContact />]
  ]

  const routeMapper = navbarData.map((routeOption, index) => {
    var routeText = routeOption[0]
    var routeURL = routeOption[1]
    var routeElement = routeOption[2]
    
    return (
      <Route exact path={routeURL} element={routeElement} />
    )
  });

  return (
    <>
      <NavBar navbarData={navbarData} />
      <div class='split left'>
        <SideBarLeft />
      </div> 
      <div class='split center'>
        <Router>
          <Routes>
            {routeMapper}      
          </Routes>
        </Router>
      </div>
      <div class='split right'>
        <SideBarRight />
      </div>
    </>
  )

};

export default App;

<>
         
      
        
        {/* <MainProjects />
        <MainExperience />
        <MainFunStuff />
        <MainGetInTouch /> */}
         
      
    </>