import React,{useState} from 'react'
import '../css/alogin.css'
import loadmin from '../img/img2.jpg'
import axios from 'axios'
import { Redirect} from "react-router-dom"

function Alogin() {

    const[adminName , setAdmin] = useState('')
    const[password , setPassword] = useState('')
    const[check__box , setCheck__box] = useState('')
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
        else {
            
                axios({
                    method :'post',
                    url :'http://localhost:3001/adminLogin',
                    data: { email : adminName , password : password},
                    headers : {
                        AuthKey :'asdfgh '
                    }
                }) 
                .then(res=>{
                    console.log(res)
                    if(res.data.status === 200){
                        setLogin(true)
                        console.log(login)
                        //  localStorage.setItem('login' , res.data.jwt)
                        console.log(res)
                    }
                    if(res.data.status === 202) {
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

    if(login){
        return(
            
        <Redirect to= {{
            pathname : "/admin" 
        }}
        />)
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
                        <div className="form-check check_mg">
                            <input className="check_box_1 form-check-input" type="checkbox" value={check__box} id="defaultCheck1" onChange={e => setCheck__box(e.target.value)} />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Remember Me
                            </label>
                        </div>
                        <button className='log_btn' onClick={SubmitHandler} >Log in</button>
                            {/* <p className='text-center frgt'>Forgot Password ?</p> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Alogin
