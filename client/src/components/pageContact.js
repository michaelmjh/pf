import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../style/pageContact.css'

function PageContact() {

    return (
        <>
            <div className='pageContact'>
                <div className='pageContactFormContainer'>
                    <form className='pageContactForm'>
                        <div className='field'>
                            <input className='inputBox' autoFocus></input>
                            <label>Name</label>
                            <br/>
                        </div>
                        <div className='field'>
                            <input className='inputBox'></input>
                            <label>Email</label>
                            <br/>
                        </div>
                        <div className='field'>
                            <input className='inputBox'></input>
                                <label>Subject</label>
                                <br/>
                            </div>
                        <div className='field'>
                            <textarea className='inputBox messageBox' rows = "10" name = "message">
                                
                            </textarea>
                            <label>Message</label>
                            <br/>
                        </div>
                        <input className='button' type="submit" value="Submit"></input>
                        
                        
                        
                    </form>
                </div>
            </div>       
        </>
    )
};

export default PageContact;