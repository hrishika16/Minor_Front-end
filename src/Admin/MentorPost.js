import React,{useState} from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import userIcon from '../img/userIcon.svg'
import '../css/mentorPost.css'

function MentorPost() {

const[initalSubject, setSubject] = useState('')
const[intialMessage,setMessage] = useState('')

    return (
        <div>
            <Header></Header>
           
            <div>
            <div className='container'>
             <div className = 'row'>
                 <div className = 'col-12 col-lg-6'>
                 <div className='container postM'>
                   
                        <div className='post_box post_boxM'>
                            <div className='row'>
                                <div className='col-3 '>
                                    <img src={userIcon} alt='profile' className='post_Img' />
                                </div>
                                <div className='col-9'>
                                    <p className='user_Name'>Name</p>
                                </div>
                            </div>
                            <div className='box_postt box_posttM'>
                            <p>Subject :</p>
                            <br></br>
                            <p >{initalSubject}</p>
                            <br></br>
                            <p>Message : </p>
                            <br></br>
                            <p>{intialMessage}</p>
                            </div>
                            
                        </div>
                   
                </div>
                </div>
                <div className = "col-12 col-lg-6 addPostM">
                <label>Subject : </label>
                   <input 
                   type = "text" 
                   id="subject" 
                   className = "inputM" 
                   value = {initalSubject}
                    onChange = {(e) => setSubject(e.target.value)}

                    ></input>
                   <p className="error" id="subjectErr"> Subject is required</p>
                   <br></br>
                   <label>Message : </label>
                   <textarea 
                   className = "messageM" 
                   value = {intialMessage} 
                   onChange = {(e) => setMessage(e.target.value)}></textarea>
                   <p className="error" id="messageErr"> Message is required</p>
                   <br></br>
                   
                </div>
                 </div>
             </div>
                
            </div>
            
               
            </div>
       
    )
}

export default MentorPost
