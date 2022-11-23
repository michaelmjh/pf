import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../style/menuContainer.css'

import MenuBlurb from '../components/menuBlurb';
import MenuOptions from '../components/menuOptions';

function MenuContainer({updateCurrentPage}) {

  return (
    <>
        <div className='menuBar'>
            <MenuBlurb />
            <MenuOptions updateCurrentPage={updateCurrentPage}/>
        </div>
    </>
  )
};

export default MenuContainer;