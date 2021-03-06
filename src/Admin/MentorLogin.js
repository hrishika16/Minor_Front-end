import React,{useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import mentorLogin from '../img/mentor_login_f.jpg'
import '../css/mentorLogin.css'

function MentorLogin() {

    const[username , setUsername] = useState('')
    const[password , setPassword] = useState('')
    const [mentorProf,setMentorProf] = useState(false)

    const SubmitHandler = (e) => {
        e.preventDefault()
    
        if(username === ''){
          
            document.getElementById('usernameErr').style.display ='block';
        
        }
        if(password === ''){
      
        document.getElementById('passwordErr').style.display = 'block';
     
        }
       
        else {
            
                axios({
                    method : 'post',
                    url : 'http://localhost:3001/mentorLogin',
                    headers : {
                        AuthKey : 'asdfgh '
                    },
                    data : {
                        email : username,
                        password : password,
                      
                    }
                }) 
                .then(res=>{
                    console.log(res)
                    if(res.data.status === 200){
                        console.log(res.data.message)
                        setMentorProf(true)
                        localStorage.setItem('mentorid',res.data.data[0].mentorId)
                        localStorage.setItem('mentorUsername',res.data.data[0].username)
                        console.log(res.data.data[0].mentorId)
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
        }
    }


    if(mentorProf){
        console.log(mentorProf)
        return(
            <Redirect to= {{
                pathname : "/mentorProfile" 
            }}
            />
        )
    }
   
    return (
        <div>
            <div className = "container-fluid mainMentorLogin">
                <div className = "row">
                    <div className = "col-12 col-lg-6">
                    <center>
                   <img src= {mentorLogin} alt = "login mentor" className="mentorLoginImg" ></img>
                   </center>
                    </div>
                    <div className = "col-12 col-lg-6">
                 
                    <h2 className="headingMentorLogin" >Login</h2>
                    <div className="constDiv">
                        <p > Username</p>
                        <input 
                        type="email" 
                        className="form-control input-mentorLogin" 
                        placeholder='Email'
                        id='user-name' 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)}/>
                        <p className='error' id='usernameErr'>Email is Required</p>   
                    </div>
                     <div  className="constDiv">
                        <p >Password</p>
                        <input 
                            type="password"
                            placeholder='Type here...'
                            className ="form-control input-mentorLogin"
                            id='password' 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)}/>   
                        <p className='error' id='passwordErr'> Password is Required</p>  
                     </div>
                       
                    <button className="loginBtn " onClick={SubmitHandler}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorLogin
