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
                            <label>Name</label>
                            <input className='inputBox' autoFocus></input>
                            <br/>
                        </div>
                        <div className='field'>
                            <label>Email</label>
                            <input className='inputBox'></input>
                            <br/>
                        </div>
                        <div className='field'>
                            <label>Subject</label>
                            <input className='inputBox'></input> 
                            <br/>
                        </div>
                        <div className='field'>
                            <label>Message</label>
                            <textarea className='inputBox messageBox' rows = "10" name = "message"></textarea>
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