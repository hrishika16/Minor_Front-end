import React from 'react'
import forgotPassword from './img/forgotPassword.jpg'
import './css/forgotPassword.css'

function ForgotPassword() {
    return (
        <div>
           <div className="container mainforgot">
               <div className="row">
                   <div className="col-12 col-lg-6 col-sm-12 ">
                     <img src={forgotPassword} alt="forgot password" width="100%"></img>
                   </div>
                   <div className="col-12 col-lg-6 col-sm-12 forgotpswd">
                       <h1>Forgot <br></br> Your Password ?</h1>
                       <form>
                           <input type = "email" placeholder="Enter your Email-Id" id="email" name="email" className="inputforgotemail"></input>
                           <br></br>
                           <button className="forgotSendBtn">Send Email</button>
                           <br></br>
                           <button className="forgotLoginBtn">Back to Login</button>
                       </form>
                   </div>
               </div>
           </div> 
        </div>
    )
}

export default ForgotPassword
