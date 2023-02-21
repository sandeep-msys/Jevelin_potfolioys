import './Contact.scss';
import React from 'react'
import {BsChatLeft} from 'react-icons/bs'
const Contact = () => {
  return (
    <div className='contact-container'
    id='Contact'>
        <div className='contact-title-container'>
            <p className='contact-heading'>
            Reach us
            </p>
            <h1 className='contact-sub-heading'>
            Do not hesitate to ask us any questions
            </h1>
            <button className='contact-button'>
<BsChatLeft className='chat-icon'/>
Contact us
            </button>
        </div>
    </div>
  )
}

export default Contact