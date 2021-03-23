import React,{useState} from 'react'
import '../css/alogin.css'
import loadmin from '../img/img2.jpg'
import axios from 'axios'
import { Redirect} from "react-router-dom"

function Alogin() {

    const[adminName , setAdmin] = useState('')
    const[password , setPassword] = useState('')
    const [login,setLogin] = useState(false)

    const SubmitHandler = (e) => {
        e.preventDefault()
        
        console.log('clock')
        // authentication.onAuthentication()
        if(adminName === ''){
            document.querySelector('#err_u').innerHTML = 'Email is required';
            document.getElementById('err_u').style.display = 'block';
            document.querySelector('#adminName').focus()
        }
        if(password === ''){
        document.querySelector('#err_p').innerHTML = 'Password is required';
        document.getElementById('err_p').style.display = 'block';
        document.querySelector('#password').focus()
        }
        // else {
            
        //         axios({
        //             method :'post',
        //             url :'https://api.wappgo.com/legal251AppDashboardAPI/?parameter=login',
        //             data: { username : adminName , password : password},
        //             headers : {
        //                 AuthKey :'asdf'
        //             }
        //         }) 
        //         .then(res=>{
        //             console.log(res)
        //             if(res.data.message === 201){
        //                 setLogin(true)
        //                  localStorage.setItem('login' , res.data.jwt)
        //                 console.log(res)
        //             }
        //             else {
        //                 console.log(res.data.message);
        //             }
        //         })
        //         .catch(err=>{
        //             console.log(err)
        //         })
        // }
    }

    if(login){
        <Redirect to= {{
            pathname : "/admin" 
        }}
        />
    }

    return (
        <div className='ll'>
            <div className='container'>
            <div className='row rr_1'>
                <div className='col-xs-6 bg1'>
                    <center>
                        <img src={loadmin} alt='login img' className='img_log' />
                    </center>
                </div>
                <div className='col-xs-6 bg2'>
                    <div>
                        <p className='logIn'>ADMIN LOGIN</p>
                        {/* text between these fields */}
                        {/* email */}
                        <div className='hj_1'>
                            <p className='emm'>Email</p>
                            <input
                                type='email'
                                placeholder = 'Enter your Email'
                                className='inp_1'
                                id='adminName'
                                value={adminName} 
                                onChange={e=>setAdmin(e.target.value)}
                            />
                            <p className='errorr' id='err_u'>This field cannot be empty</p>
                        </div>
                        {/* password */}
                        <div className='hj_1'>
                            <p className='emm'>Password</p>
                            <input
                                type='password'
                                placeholder = 'Enter your Password'
                                className='inp_1'
                                id='password' 
                                value={password} 
                            onChange={e=>setPassword(e.target.value)}
                            />
                            <p className='errorr' id='err_p'>This field cannot be empty</p>
                        </div>
                        <button className='log_btn' onClick={SubmitHandler} >Log in</button>
                            <p className='text-center frgt'>Forgot Password ?</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Alogin
