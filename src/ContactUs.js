import React from 'react'
import contactImage from './img/contactUs.png'
import './css/contact.css'

function ContactUs() {
    return (
        
<div className="container-fluid complete" >
    <div className="row" >
      <div className="col col-lg-6 columnFirst">
        <h1 className="heading">Contact Us</h1>
        <h2>Get In Touch With Us</h2>
        <h3>Click on the below button to post your queries.</h3>
        
        <h3>We are here to help you out. </h3>
        <button className="contactBtn">Contact Us </button>
        </div>
     <div className="col col-lg-6 columnSecond">
     <img src={contactImage} alt="contact us " width='100%' ></img>
      </div>
    </div>
</div>
       
    )
}

export default ContactUs
