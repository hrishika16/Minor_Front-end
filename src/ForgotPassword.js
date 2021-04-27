import React,{useState} from 'react'
import forgotPassword from './img/forgotPassword.jpg'
import './css/forgotPassword.css'
import axios from 'axios'

function ForgotPassword() {

    const[forgotEmail,setForgotEmail] = useState('')

    const onSubmitMail = (e)=>{
     e.preventDefault()
     if(forgotEmail === ''){
        document.getElementById("forgotEmailError").style.display="block"
    }
    else{
         axios({
             method:'post',
           //  url:
            data : {
                email : forgotEmail
            },
            headers:{
            //    AuthKey : 
            }

         })
         .then(resp=>{
             console.log(resp.data)
             if(resp.data.message === 201 ){
                 //error occur 
             }
             else {
                 console.log(resp.data.message)
             }

         })
         .catch(error => {
             console.log(error)
         })
    }
    }

    return (
        <div>
           <div className="container mainforgot">
               <div className="row">
                   <div className="col-12 col-lg-6 col-sm-12 imgForgot">
                     <img src={forgotPassword} alt="forgot password" width="100%"></img>
                   </div>
                   <div className="col-12 col-lg-6 col-sm-12 forgotpswd">
                   
                       <h1>Forgot <br></br> Your Password ?</h1>
                       <center>
                       <form>
                       <div className="inputElementForgot">
                           <input type = "email" placeholder="Enter your Email-Id" id="email"  className="inputforgotemail" value={forgotEmail} onChange={(e)=>setForgotEmail( e.target.value)}></input>
                           <p id="forgotEmailError" className="error">Email is Required </p>
                           </div>
                           <br></br>
                           <button className="forgotSendBtn" onClick={onSubmitMail} >Send Email</button>
                           <br></br>
                           <button className="forgotLoginBtn">Back to Login</button>
                       </form>
                       </center>
                   </div>
               </div>
           </div> 
        </div>
    )
}

export default ForgotPassword
