import React,{useState, useEffect} from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import mentorLogin from '../img/mentor_login_f.jpg'
import axios from 'axios'
import '../css/mentorProfile.css'

function MentorProfile() {
    const[dataProfiel, setdataProfiel] = useState([])

    useEffect( ()=>{
        const mentor_id = localStorage.getItem('mentorid')
        axios({
            method : 'post',
            url : 'http://localhost:3001/mentorProfile',
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
                console.log(res.data)
                //  dataProfiel = res.data.data[0]
                // console.log(dataProfiel)
                setdataProfiel([res.data.data[0]])
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

    const renderDetailsOfMentor = ()=>{
        
        return dataProfiel.map((det) =>{
            // const pass = det.password.subString(0,4)
            console.log("hello",det.username)
            return(
                <React.Fragment key={det.mentorId}>
                  <p className="profileDetails">Name : {det.username}</p>
                  <p className="profileDetails"> Email-ID : {det.email} </p>
                  <p className="profileDetails">Phone Number : {det.contact} </p>
                  <p className="profileDetails">Qualification : {det.qualification} </p>
                  <p className="profileDetails">DOB : {det.dob} </p>
                  <p className="profileDetails">Total Posts :</p>
                </React.Fragment>
            )
        })
    }
    
    
    return (
        <div className='mainMentorProfile'>
         <Header></Header>  
         <Sidebar></Sidebar> 
         <div className="mainProfile">
             <div className ="row">
                 <div className="col-12 col-lg-12 ">
                 <center>
                  <img src={mentorLogin} alt = "image" width="150px" height = "150px" className="imgMentorProfile"></img>
                
                  {renderDetailsOfMentor()}
                  </center>
                 </div>
                 
             </div>
         </div>
        </div>
    )
}

export default MentorProfile
