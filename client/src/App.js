import React from 'react';
import './style/App.css';

// Containers
import MenuContainer from './containers/menuContainer';
import PageContainer from './containers/pageContainer';

function App() {

    return (
    <>
        <div className='site'>
            <MenuContainer />
            <PageContainer />
        </div>
        
    </>
  )

};

export default App;