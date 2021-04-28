import React,{useState} from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import userIcon from '../img/userIcon.svg'
import '../css/mentorPost.css'
import axios from 'axios'

function MentorPost() {

const[intialSubjectM, setSubject] = useState('')
const[intialMessageM,setMessage] = useState('')

const onAddClick = (e) =>{

    e.preventDefault()
    if(intialSubjectM ===''){
        document.getElementById("subjectErrM").style.display="block"

    }
    if(intialMessageM ===''){
        document.getElementById("messageErrM").style.display="block"
 
    }
    
    
       else{
            axios({
              method : 'post',
            //   url:'http://localhost:3001/contactUs',
              data: {
               message : intialMessageM ,
                subject : intialSubjectM
              },
              headers : {
                AuthKey : 'asdfgh '
              }
            })
            .then(resp=>{
              console.log(resp)
              if(resp.data.status === 200){
                //error occur 
                console.log(resp.data.message)
              }
              else if(resp.data.status === 202) {
                // console.log(res.data.message);
                console.log(" Please center with correct credentials")
              }
              else{
                  console.log("Some error occured")
              }
            })
            .catch(error=>{
              console.log(error)
            })
       }
}

    return (
        <div className='postM'>
            <Header></Header>
           <br></br>
            
            <div className='container-fluid  postM '>
             <div className = 'row rowMargin'>
           
                 <div className = 'col-12 col-lg-6 container'>
                   <div className='post_boxM'>
                            <div className='row'>
                                <div className='col-3 '>
                                    <img src={userIcon} alt='profile' className='post_ImgM' />
                                </div>
                                <div className='col-9'>
                                    <p className='user_NameM'>Name</p>
                                </div>
                            </div>
                            <div className=' box_posttM'>
                            <p className = "box_posttSubH">Subject :</p>
                            <br></br>
                            <div className = "valM">
                            <p  className = "box_posttSubD">{intialSubjectM}</p>
                            </div>
                            <br></br>
                            <p  className = "box_posttSubH" >Message : </p>
                            <br></br>
                            <div className = "valM">
                            <p  className = "box_posttSubD">{intialMessageM}</p>
                            </div>
                            </div>
                          
                            </div>
                          
                      </div>
                     
                <div className = "col-12 col-lg-6 addPostM">
                <h1 className="addPostHeading">Add Your Post </h1>
                <div className="card text-white bg-primary mb-3">
                    <div className="card-header">Subject :</div>
                    <div className="card-body">
                        <h5 className="card-title">Type Your Subject Here</h5>
                        <input className="card-text inputM"
                            type = "text" 
                            id="subject" 
                          
                            value = {intialSubjectM}
                            onChange = {(e) => setSubject(e.target.value)}

                    ></input>
                    </div>
                </div>
                <p className="error" id="subjectErrM"> Subject is required</p>
                   <br></br>
                   <div className="card text-white bg-primary mb-3">
                    <div className="card-header">Message : </div>
                    <div className="card-body">
                        <h5 className="card-title">Type Your Message Here</h5>
                        <textarea className="card-text messageM"
                      
                        value = {intialMessageM} 
                        onChange = {(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    </div>
                   
                   <p className="error" id="messageErrM"> Message is required</p>
                   <br></br>
                   <center>
                   <button type = "button" className = "addPostBtn" onClick ={onAddClick}>Add +</button>
                   </center>

                </div>
                 </div>
             </div>
        </div>
     
          
               
          
       
    )
}

export default MentorPost
