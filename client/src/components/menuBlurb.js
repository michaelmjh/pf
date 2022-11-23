import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../style/menuContainer.css'

import portrait from '../media/images/Portrait.png'
import gitHubLogo from '../media/icons/github.png'
import linkedInLogo from '../media/icons/linkedin.png'

function MenuBlurb() {

    const socialButtonOptions = [
        {
          'Text': 'GitHub',
          'Icon': gitHubLogo,
          'Link': 'https://github.com/michaelmjh'
        },
        {
          'Text': 'LinkedIn',
          'Icon': linkedInLogo,
          'Link': 'https://linkedin.com/in/michaelmjh'
        },
    ];

    const buttonMapper = socialButtonOptions.map((buttonOption, index) => {
        return (
            <a href={buttonOption['Link']} key={index} target='blank' rel='noopener noreferrer'>
                <img className='socialLogo' src={buttonOption['Icon']} alt={buttonOption['Text']} />
            </a>
        )
    })

    return (
    <>
        <div className='menuBlurb'>
            <p className='nameHeader'>Michael Hughes</p>
            {/* <img className='portrait' src={portrait} alt='Micahel Hughes' /> */}
            <p className='subtitleHeader'>Software Engineer</p>
            <div className='socialLinks'>
                {buttonMapper}
            </div>
        </div>
    </>
  )

};

export default MenuBlurb;