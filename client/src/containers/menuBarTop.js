import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../style/menuBar.css';

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

    const buttonMapper = topButtonOptions.map((buttonOption, index) => {
        const buttonText = buttonOption['buttonText'];
        const buttonIcon = buttonOption['buttonIcon'];
        const buttonLink = buttonOption['buttonLink'];
        
        return (
            <li className='menuButton'>
                <p>{buttonText}</p>
            </li>
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