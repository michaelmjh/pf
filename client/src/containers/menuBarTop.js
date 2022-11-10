import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../style/menuBar.css';

import MenuButton from '../components/menuButton';

function MenuBarTop() {

    const topButtonOptions = [
        {
            'buttonText': 'Home',
            'buttonIcon': '',
            'buttonLink': '/'
        },
        {
            'buttonText': 'About',
            'buttonIcon': '',
            'buttonLink': '/about'
        },
        {
            'buttonText': 'Projects',
            'buttonIcon': '',
            'buttonLink': '/projects'
        },
        {
            'buttonText': 'Fun Things',
            'buttonIcon': '',
            'buttonLink': '/fun'
        }
    ]

    const buttonMapper = topButtonOptions.map((buttonOption, index) => {
        
        return (
            <MenuButton buttonOption={buttonOption}/>
        )
    })

    return (
        <>
            <div className='menuBar topMenu'>
                <ul className='menuButtonList'>
                    {buttonMapper}
                </ul>    
            </div>
        </>
    );
}

export default MenuBarTop;