import React from 'react'
import './css/emailSent.css'
import HeaderUser from './HeaderUser'
import emailSent from './img/emailSent.svg'

function EmailSent() {
    return (
        <div className="mainEmailSent">

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6 emailSent ">
               <center>
                <p className="emailSent">Email has been sent to your Email Id <br></br>
                  Please verify to Register</p>
                  <br></br>
                </center>
                </div>
                <div className="col-12 col-lg-6 ">
                <center>
                <img src={emailSent} alt ="email sent" width = "100%" className="imgEmailSent"></img>
                </center>
                </div>
            </div>
        </div>
       
        </div>
    )
}

export default EmailSent
