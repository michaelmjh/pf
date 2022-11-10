import React from 'react';
import '../style/menuBar.css';

function MenuButton({buttonOption}) {
    const buttonText = buttonOption['buttonText'];
    const buttonIcon = buttonOption['buttonIcon'];
    const buttonLink = buttonOption['buttonLink'];

    return (
        <>
            <li >
                <a className='menuButton' href={buttonLink}>{buttonText}</a>
            </li>
            
        </>
    );
}

export default MenuButton;