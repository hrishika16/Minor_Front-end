import React,{useState} from 'react'
import './css/login.css'
import img1 from './img/userLogin.jpg'
import { Redirect} from "react-router-dom"
import axios from 'axios'
import { authentication } from './App'


function Login() {
    const[username , setUsername] = useState('')
    const[password , setPassword] = useState('')
    const [login,setLogin] = useState(false)

    const SubmitHandler = (e) => {
        e.preventDefault()
        authentication.onAuthentication()
        if(username === ''){
           
            document.getElementById('userErr').style.display = 'block';
            // document.querySelector('#user-name').focus()
        }
        if(password === ''){
        
        document.getElementById('passErr').style.display = 'block';
        // document.querySelector('#password').focus()
        }
       
        else {
            
                axios({
                    method : 'post',
                   // url : 'http://localhost:3001/signupdata',
                    headers : {
                        AuthKey : 'asdfgh '
                    },
                    data : {
                        email : username,
                        password : password,
                        // category : 
                    }
                }) 
                .then(res=>{
                    console.log(res)
                    if(res.data.message === 201){
                        setLogin(true)
                        //  localStorage.setItem('login' , res.data.jwt)
                        console.log(res)
                    }
                    else {
                        console.log(res.data.message);
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }

    if(login) {
        
        // ll = localStorage.getItem('login')
        // return (
        //     <Redirect to= {{
        //         pathname : "/dashboard" 
        //     }}
        //     />
        // )
    }

    return (
        <div className='ro'>
            <div className='row'>
                <div className='col-lg-5 col-12'>
                    <img src={img1} alt='Login image 1' className='img1' />
                </div>
                <div className='col-lg-7 col-12'>
                    
                    <div className='spaceee'>
                    <h2 className='sign'>Sign Up</h2>
                    <div className='hgt1'>
                    <div class="box1">
                                <p class="border_txt"> UserName</p>
                                <input type="email" id="user-name" maxLength="35" className="form-control inp_mm intL" value={username} onChange={e => setUsername(e.target.value)} placeholder="Email-ID"/>
                                <p className='error' id='userErr'> Username is Required </p>
                            </div>
                            </div>
                            <div className='box_3'>
                            <div class="box1">
                                <p class="border_txt"> Password</p>
                                <textarea type="password" id="password" maxLength="600" className="form-control inp_mm intL" value={password} onChange={e => setPassword(e.target.value)} placeholder="Type here..."/>
                                <p className='error' id='passErr'> Password is Required</p>
                            </div>
                    </div>
                       
                    <button className="btn_submit" onClick={SubmitHandler}>Login</button>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
