import React, { useState, useRef } from 'react';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import '../style/pageContact.css'

function PageContact() {

    const form = useRef();

    const SERVICE_ID = "service_o0wunfc";
    const TEMPLATE_ID = "template_z8g2geh";
    const USER_ID = "ZsGi5aglVF32iuMFO";

    const [email, setEmail] = useState("");

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            return true
        } else if (!regEx.test(email) && email !== "") {
            return false
        } else {
            return false
        }
    };

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newContact = {
            from_name: event.target.user_name.value,
            message: event.target.message.value,
            from_email: event.target.user_email.value,
        }

        if (emailValidation()){
            emailjs.send(SERVICE_ID, TEMPLATE_ID, newContact, USER_ID)
                .then((result) => {
                    console.log(form.current);
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent Successfully'
                    })
                }, (error) => {
                    console.log(error.text);
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops, something went wrong',
                        text: error.text,
                })
            });
            event.target.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Enter a valid email',
            })
        };
    };

    return (
        <>
            <div className='pageContact'>
                <div className='pageContactFormContainer'>
                    <form ref={form} className='pageContactForm' onSubmit={handleSubmit}>
                        <div className='field'>
                            <label>Name</label>
                            <input 
                                className='inputBox' 
                                name='user_name'
                                type='string'
                                autoFocus                                
                                required>
                            </input>
                            <br/>
                        </div>
                        <div className='field'>
                            <label>Email</label>
                            <input 
                                className='inputBox'
                                onChange={handleOnChange}
                                name='user_email'
                                type='email'
                                required>
                            </input>
                            <br/>
                        </div>
                        <div className='field'>
                            <label>Message</label>
                            <textarea 
                                className='inputBox messageBox' 
                                name='message'
                                type='string'
                                rows = '6'
                                required>
                            </textarea>
                            <br/>
                        </div>
                        <input 
                            className='button' 
                            type="submit" 
                            value="Submit">
                        </input>
                    </form>
                </div>
            </div>       
        </>
    )
};

export default PageContact;

// return (
//     <div className='pageContact'>
//     <div className='pageContactFormContainer'>
//       <Form className='pageContactForm' onSubmit={handleOnSubmit}>
//         <Form.Field
//             className='inputBox'
//             autoFocus
//             id='form-input-control-email'
//             control={Input}
//             label='Email'
//             name='user_email'
//             placeholder='Email…'
//             required
//             icon='mail'
//             iconPosition='left'
//         />
//         <Form.Field
//             className='inputBox'
//             id='form-input-control-last-name'
//             control={Input}
//             label='Name'
//             name='user_name'
//             placeholder='Name…'
//             required
//             icon='user circle'
//             iconPosition='left'
//         />
//         <Form.Field
//             className='inputBox messageBox'
//             id='form-textarea-control-opinion'
//             control={TextArea}
//             label='Message'
//             name='user_message'
//             placeholder='Message…'
//             required
//         />
//         <Button type='submit' color='green'>Submit</Button>
//       </Form>
//     </div>
//     </div>
// )