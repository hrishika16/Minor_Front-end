import React from 'react'

function ForgotPassword() {
    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-12 col-lg-6">
                     <img src='' alt="forgot password"></img>
                   </div>
                   <div className="col-12 col-lg-6">
                       <h1>Forgot Your Password ?</h1>
                       <form>
                           <input type = "email" placeholder="Enter your Email-Id" id="email" name="email" ></input>
                           <br></br>
                           <button>Send Email</button>
                       </form>
                   </div>
               </div>
           </div> 
        </div>
    )
}

export default ForgotPassword
