import React from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import mentorLogin from '../img/mentor_login_f.jpg'
import '../css/mentorProfile.css'

function MentorProfile() {
    
    return (
        <div>
         <Header></Header>  
         <Sidebar></Sidebar> 
         <div className="container">
             <div className ="row">
                 <div className="col-12 col-lg-12 ">
                 <center>
                  <img src={mentorLogin} alt = "image" width="150px" height = "150px" className="imgMentorProfile"></img>
                
                  <p className="profileDetails">Name : </p>
                  <p className="profileDetails"> Email-ID : </p>
                  <p className="profileDetails">Password : </p>
                  <p className="profileDetails">Phone Number : </p>
                  <p className="profileDetails">Qualification : </p>
                  <p className="profileDetails">DOB : </p>
                  <p className="profileDetails">Total Posts :</p>
                  </center>
                 </div>
             </div>
         </div>
        </div>
    )
}

export default MentorProfile
