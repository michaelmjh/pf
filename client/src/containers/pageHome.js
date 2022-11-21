import React from 'react';
import '../style/pageHome.css';

function PageHome() {


    return (
        <>
            <div className='pageHome'>
                <div className='textContainer'>
                    <p>Hi, I'm</p>
                    <header className='nameTitle'>Michael<span className='namePeriod'>.</span></header>
                    <p className='sectionHead'>I like to design and build things.</p>
                    <br />
                    <p>You can find me working in the Digital Factory at Jacobs, using mostly SQL and Python,<br />as well as making cool stuff with Javascript and React in my spare time.</p>
                    <br />
                    <p>Check out some of my work, or get in touch to say 'Hi'.</p>
                </div>
                
            </div>
            
        </>
    );
}

export default PageHome;