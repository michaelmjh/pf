import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../style/menuContainer.css'
import MenuOption from './menuOption';

function MenuOptions() {

    const menuOptions = [
        {
            'Text': 'Home',
            'Link': '/'
        },
        {
            'Text': 'About',
            'Link': '/about'
        },
        {
            'Text': 'Projects',
            'Link': '/projects'
        },
        {
            'Text': 'Fun Things',
            'Link': '/fun'
        },
        {
            'Text': 'Contact',
            'Link': '/contact'
        },
    ];

    const menuMapper = menuOptions.map((menuOption, index) => {
        return (
            <MenuOption key={index} menuOption={menuOption} />
        )
    })

    return (
    <>
        <div className='menuOptions'>
            <ul className='menuList'>
                {menuMapper}
            </ul>
        </div>
    </>
  )

};

export default MenuOptions;