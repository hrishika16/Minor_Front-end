import React from 'react'
import './css/contactUsForm.css'
import contactImage from './img/contactUs.png'

function contactUsForm() {
    return (
        <div className="container-fluid complete" >
        <div className="row" >
          <div className="col-12 col-lg-6 columnFirst">
            <h1 className="heading">Send Your Message To Us... </h1>
            <form>
            <input type="email" placeholder="Email-Id" className="inputElement" id="email" name="email" required="email"></input>
            <br></br>
            <textarea placeholder="Enter Your Message" className="message"></textarea>
            <br></br>
            <button className="sendBtn">Send </button>
            </form>
         </div>
         <div className="col-12 col-lg-6 columnSecond">
         <img src={contactImage} alt="contact us " width='100%' ></img>
          </div>
        </div>
    </div>
    )
}

export default contactUsForm
