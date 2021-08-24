import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../styles/_contact.scss'

const Contact = () => {
    
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState(''),
        [messageSent, setMessageSent] = useState(false);
        const sendMessage = (e) => {
            e.preventDefault();
    
            axios.post('/api/email', {firstName, lastName, email, subject, message})
            .then(() => {
                setMessageSent(true);
                setSubject('');
                setMessage('');
            })
            .catch(err => console.log(err))
        }
        return(
        
            <main className='contact-main'>
              
               
                {!messageSent
                    ? (
                        <form className='contact-form'>
                              <h2>Questions/Special Requests? Shoot us an email</h2>
                                <section className='name-input'>
                                    <span></span>
                                    <input value={firstName} placeholder='First Name *'
                                     required onChange={e => setFirstName(e.target.value)}/>
                                </section>
                                <section className='name-input'>
                                   
                                    <input value={lastName}
                                    placeholder = 'Last Name *' 
                                    required onChange={e => setLastName(e.target.value)}/>
                                </section>
                            
                            <input value={email} placeholder='Email *' required onChange={e => setEmail(e.target.value)}/>
                            <input value={subject} placeholder='Subject' required onChange={e => setSubject(e.target.value)}/>
                            <label className= 'message'>Message:</label> <br/>
                            <textarea value={message} placeholder='Write a message here' required autoComplete = 'off' onChange={e => setMessage(e.target.value)}/> <br/>
                            <button className= 'submit-button' onClick={sendMessage}>Submit</button>
                        </form>
                    ) 
                    : (
                        <section className='sent'>
                            <h2>Your message has been sent!</h2>
                            <div ><Link to = '/'><button classname= 'home-btn'>Home</button></Link></div>
                        </section>
                    )}
            </main>
        )
    
}

export default Contact
