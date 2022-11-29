import React from 'react';
import '../style/menuContainer.css'

function MenuOption({menuOption}) {

    console.log(window.location.pathname)

    if (menuOption['Link'] == window.location.pathname) {
        return (
            <>
                <li className='menuOption'>
                    <a className='menuText currentPage' >
                        {menuOption['Text']}
                    </a>
                </li>
            </>
        )
    } else {
        return (
            <>
                <li className='menuOption'>
                    <a className='menuText' href={menuOption['Link']} >
                        {menuOption['Text']}
                    </a>
                </li>
            </>
        )
    }

    return (
        <>
            <li className='menuOption'>
                <a className='menuText' href={menuOption['Link']} >
                    {menuOption['Text']}
                </a>
            </li>
        </>
    )
};

export default MenuOption;