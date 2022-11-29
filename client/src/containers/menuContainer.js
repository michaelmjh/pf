import React from 'react';
import '../style/menuContainer.css'

// COMPONENTS
import MenuBlurb from '../components/menuBlurb';
import MenuOptions from '../components/menuOptions';

function MenuContainer() {

  return (
    <>
        <div className='menuBar'>
            <MenuBlurb />
            <MenuOptions />
        </div>
    </>
  )
};

export default MenuContainer;