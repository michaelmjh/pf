import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../style/menuBar.css';
import MenuButton from '../components/menuButton';

function MenuBarBottom() {

    const bottomButtonOptions = [
        {
          'buttonText': 'Email',
          'buttonIcon': '',
          'buttonLink': 'mailto:michaelmjh@icloud.com'
        },
        {
          'buttonText': 'GitHub',
          'buttonIcon': '',
          'buttonLink': 'https://github.com/michaelmjh'
        },
        {
          'buttonText': 'LinkedIn',
          'buttonIcon': '',
          'buttonLink': 'https://linkedin.com/in/michaelmjh'
        },
      ];

    const buttonMapper = bottomButtonOptions.map((buttonOption, index) => {
            return (
                <MenuButton buttonOption={buttonOption}/>
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