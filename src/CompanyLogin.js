import React,{useState} from 'react'
import axios from 'axios'
import companyLogin from './img/companyL.png'
import './css/companyLogin.css'
import {Redirect} from 'react-router-dom'

function CompanyLogin() {
    const[email , setEmail] = useState('')
    const[password , setPassword] = useState('')
    const [complogin,setCompLogin] = useState(false)

    const SubmitHandler = (e) => {
        e.preventDefault()
      
        if(email === ''){
          
            document.getElementById('userErr').style.display = 'block';
            // document.querySelector('#user-name').focus()
        }
        if(password === ''){
        // document.querySelector('#passErr').innerHTML = 'Password is Required';
        document.getElementById('passErr').style.display = 'block';
        // document.querySelector('#password').focus()
        }
       
        else {
            axios({
                method : 'post',
                url : 'http://localhost:3001/companyLogin',
                data: {
                    'email' : email,
                    'password' : password
                  },
                  headers : {
                    AuthKey : 'asdfgh'
                  }
            }) 
            .then(resp=>{
                console.log(resp)
                if(resp.data.status === 200){
                  console.log(resp.data.message)
                  setCompLogin(true)
                  localStorage.setItem('companyid',resp.data.data[0].companyId)
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

    if(complogin) {
        
        // ll = localStorage.getItem('login')
        return (
            <Redirect to= {{
                pathname : "/companyProfile" 
            }}
            />
        )
    }
    return (
      
        <div >
            <div className='ro'>
            <div className='row'>
                <div className='col-lg-5 col-12'>
                    <img src={companyLogin} alt='Login image 1' className='img1' />
                </div>
                <div className='col-lg-7 col-12'>
                    
                    <div className='spaceee'>
                    <h2 className='sign loginBorder'>Login</h2>
                    <div className='hgt1'>
                        <p className='lbl_txt'> Email </p>
                        <input 
                        type="email" 
                        className="form-control inp_login" 
                        placeholder='Email-Id'
                        id='user-name' 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}/>
                        <p className='error' id='userErr' > Email is Required</p>   
                    </div>
                     <div className='hgt1'>
                        <p className='lbl_txt'>Password</p>
                        <input 
                            type="password"
                            placeholder='Type here...'
                            className ="form-control inp_login"
                            id='password' 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)}/>   
                        <p className='error' id='passErr'>Password is Required</p>  
                     </div>
                       <center>
                    <button className="btn_submitCL" onClick={SubmitHandler}>Login</button>
                    </center>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
        
    
}

export default CompanyLogin
