import React from 'react';
import '../style/modal.scss';
import Close from '../media/icons/x-mark.png'

import Baton from '../media/images/Baton.png'
import Dillon from '../media/images/dillon.jpeg'
import TT from '../media/images/toptrumps.png'

function Modal({modalState, toggleModal}) {
    
    const project = {
        'Title': 'Music Elephant',
        'SubTitle': 'CodeClan Capstone Group Project / 2022',
        'Logo': Baton,
        'GitLink': '',
        'LiveLink': '',
        'Description': 'An iOS app used to teach music theory through interactive lessons and quizzes, as well as allowing users to create and edit profiles.',
        'Tech': ['Dart', 'Flutter', 'Java', 'PostgreSQL', 'Spring']
    }

    const techMapper = project['Tech'].map((techOption, index) => {
    
        return (
          <>
            <br/> - {techOption}
          </>
        )
    })

    if (!modalState) {
        return (
            <>
                <div className='mPContainer'> 
                </div>  
            </>
        )
    } else {
        return (
            <>
                <div className='mPContainer active'>
                    <div className='mPModal'>
                        <div className='mPClose'>
                            <img className='mPCloseImage' src={Close} onClick={toggleModal}/>
                        </div>
                        <div className='mPProject'>
                            <p class='mPTitle'>{project['Title']}</p>
                            <p class='mPSubTitle'>{project['SubTitle']}</p>
                            <img class='mPImage' src={project['Logo']} width='200'></img>
                            <p class='mPImage'>{project['Description']}
                                <br/>Built using:
                                {techMapper}
                            </p>
                            <div className='mPButtonsContainer'>
                                <a className='mPButton'>
                                    Visit Site
                                </a>
                                <a className='mPButton'>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
};

export default Modal;