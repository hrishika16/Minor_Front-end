import React from 'react'
import contactImage from './img/contactUs.png'
import './css/contact.css'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        
<div className="container-fluid complete" >
    <div className="row" >
      <div className="col-12 col-lg-6 columnFirst">
      
        <h1 className="headingContactUs">Contact Us</h1>
        <h2 className="headingSecond">Get In Touch With Us</h2>
        <h3 className="headingThird">Click on the below button to post your queries.<br></br>We are here to help you out.</h3>
        <button className="contactBtn"><Link to = '/contactUsForm' className = "linkcontact">Contact Us</Link> </button>
      </div>
     <div className="col-12 col-lg-6 columnSecond">
     <img src={contactImage} alt="contact us " width='100%' ></img>
      </div>
    </div>
</div>
       
    )
}

export default ContactUs
