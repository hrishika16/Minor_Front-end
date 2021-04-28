import React,{useState, useEffect} from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import mentorLogin from '../img/mentor_login_f.jpg'
import axios from 'axios'
import '../css/mentorProfile.css'

function MentorProfile() {

    

    useEffect( ()=>{
        const mentor_id = localStorage.getItem('mentorid')
        axios({
            method : 'post',
            url : 'http://localhost:3001/mentorLogin',
            headers : {
                AuthKey : 'asdfgh '
            },
            data : {
                'mentorid' : mentor_id
              
            }
        }) 
        .then(res=>{
            console.log(res)
            if(res.data.status === 200){
                console.log(res.data.message)
            }
            else if(res.data.status === 202) {
            // console.log(res.data.message);
            console.log(" Please center with correct credentials")
            }
            else{
                console.log("Some error occured")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    
    return (
        <div className='mainMentorProfile'>
         <Header></Header>  
         <Sidebar></Sidebar> 
         <div className="mainProfile">
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
