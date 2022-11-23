import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../style/menuContainer.css'

function MenuOption({menuOption}) {

    const handleLinkClick = () => {
        console.log('fuck you js')
    }

    return (
        <>
            <li className='menuOption'>
                <a className='menuText' href={menuOption['Link']} onClick={handleLinkClick} >
                    {menuOption['Text']}
                </a>
            </li>
        </>
    )
};

export default MenuOption;