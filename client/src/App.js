import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/App.css';

// Containers
import MenuContainer from './containers/menuContainer';
import PageContainer from './containers/pageContainer';

function App() {

    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        setCurrentPage('/')
    }, []);

    const updateCurrentPage = (link) => {
        setCurrentPage(link)
    }

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