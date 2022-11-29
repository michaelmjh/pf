import React from 'react';
import '../style/modal.scss';
import Close from '../media/icons/x-mark.png'

function Modal({modalState, toggleModal}) {
    
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
                        <div className='mPHeading'>
                        Project
                        </div>
                    </div>
                </div>  
            </>
        )
    }

    

};

export default Modal;