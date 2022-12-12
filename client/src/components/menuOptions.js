import React from 'react';
import '../style/menuContainer.css';

// COMPONETS
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
        // {
        //     'Text': 'Fun Things',
        //     'Link': '/fun'
        // },
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