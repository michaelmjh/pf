import React from 'react';
import './style/App.css';

// Containers
import ParticleContainer from './containers/particalContainer';
import MenuContainer from './containers/menuContainer';
import PageContainer from './containers/pageContainer';

function App() {

    return (
    <>
        <img className='background'></img>
        <div className='site'>
			<ParticleContainer />
            <MenuContainer />
            <PageContainer />
        </div>
        
    </>
  )

};

export default App;