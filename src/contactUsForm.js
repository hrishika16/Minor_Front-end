import React,{useState} from 'react'
import './css/contactUsForm.css'
import axios from 'axios'
import address from './img/address.svg'
import phone from './img/phone.svg'
import email from './img/email.svg'


function ContactUsForm() {

  const[intialName,changeName] = useState('')
  const[intialEmail,changeEmail] = useState('')
  const[intialMessage,changeMessage] = useState('')
  const[intialSubject , changeSubject] = useState('')

 const onSendDetails=(e)=> {
  e.preventDefault()
  if(intialName ===''){
 document.getElementById("intialNameError").style.display="block"

  }
  if(intialEmail ===''){
    document.getElementById("intialEmailError").style.display="block"
 
     }
     if(intialMessage ===''){
      document.getElementById("intialMessageError").style.display="block"
    
       }
      if(intialSubject === ''){
        document.getElementById("intialSubjectError").style.display="block"
     
      }
       else{
            axios({
              method : 'post',
              // url:'',
              data:{username:intialName , email:intialEmail , message:intialMessage ,subject:intialSubject}
            })
            .then(resp=>{
              console.log(resp)
              if(resp.data.message === 201){
                //error occur 
              }
              else{
                console.log(resp.data.message)
              }
            })
            .catch(error=>{
              console.log(error)
            })
       }

  }

 

    return (
        <div className="container completeContactForm" >
        <center>
          <h1 className="headingContact">Contact Us</h1>
       
          </center>
        <div className="row" >
      
          <div className="col-12 col-lg-6 columnFirstSend ">
        
          <img src={address} alt="phone" width="40px" height="40px"></img>
          <h2 className="inlinestyle">Address</h2>
          <h3>Indore</h3>
          <br></br>
          <br></br>
          <img src={phone} alt="phone"  width="40px" height="40px" ></img>
          <h2 className="inlinestyle">Phone</h2>
          <h3>+91 8602415434</h3>
          <br></br>
          <br></br>
          <img src={email}  alt="Email"  width="40px" height="40px"></img>
          <h2 className="inlinestyle">Email</h2>
          <h3>xyz@gmail.com</h3>
          
          
          
        </div>
         <div className="col-12 col-lg-6 columnSecondSend">
          <div>
        
            <h1 className="headingSend">Send Message</h1>
          
            <form>
            <div className="constantSize">
            <input type = "text" placeholder="Name" id="name" className="inputElement" value={intialName} onChange={(e)=>changeName(e.target.value)}></input>
            <p className="error" id="intialNameError">User Name is Required</p>
            </div>
            <br></br>
             <div className="constantSize">
            <input type="email" placeholder="Email-Id" id="email" className="inputElement" value={intialEmail} onChange={(e)=>changeEmail(e.target.value)}></input>
            <p className="error" id="intialEmailError">Email-Id is Required</p>
            </div>
            <br></br>
            <div className="constantSize">
            <input type = "text" placeholder="Subject" id="subject" className="inputElement" value={intialSubject} onChange={(e)=>changeSubject(e.target.value)}></input>
            <p className="error" id="intialSubjectError">Subject is Required</p>
            </div>
            <br></br>
          <div className="constantMessageSize">
            <textarea placeholder="Enter Your Message" id="message" className="message" value={intialMessage} onChange={(e)=>changeMessage(e.target.value)}></textarea>
            <p className="error" id="intialMessageError">Message is Required</p>
            </div>
            <br></br>
            <button className="sendBtn" onClick={onSendDetails}>Send</button>
            </form>
           
          </div>
          </div>
        </div>
    </div>
    )
}

export default ContactUsForm

