import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../style/menuBar.css';

function MenuBarBottom() {

    const bottomButtonOptions = [
        {
          'buttonText': 'Email',
          'buttonIcon': '',
          'buttonLink': '/'
        },
        {
          'buttonText': 'GitHub',
          'buttonIcon': '',
          'buttonLink': '/'
        },
        {
          'buttonText': 'LinkedIn',
          'buttonIcon': '',
          'buttonLink': '/'
        },
      ];

    const buttonMapper = bottomButtonOptions.map((buttonOption, index) => {
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
            <div className='menuBar bottomMenu'>
                <ul className='menuButtonList'>
                    {buttonMapper}
                </ul>
            </div>
        </>
    );
}

export default MenuBarBottom;