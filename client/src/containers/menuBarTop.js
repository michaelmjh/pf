import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../style/menuBar.css';

function MenuBarTop({topButtonOptions}) {

    const buttonMapper = topButtonOptions.map((buttonOption, index) => {
        const buttonText = buttonOption['buttonText'];
        const buttonIcon = buttonOption['buttonIcon'];
        const buttonLink = buttonOption['buttonLink'];
        
        return (
            <li class='menuButton'>
                <p>{buttonText}</p>
            </li>
        )
    })

    return (
        <>
            <div class='menuBar topMenu'>
                <ul class='menuButtonList'>
                    {buttonMapper}
                </ul>    
            </div>
        </>
    );
}

export default MenuBarTop;