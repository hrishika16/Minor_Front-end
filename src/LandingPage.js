import React,{useState} from 'react'
import axios from 'axios'
import './css/landingP.css'
import { Redirect } from 'react-router'
import $ from 'jquery'

function LandingPage(props) {

    
    
    const[emailRegisterM , setEmailRegisterM] = useState('')
    const[passwordR , setPasswordR] = useState('')
    const[emailCompanyM,setEmailCompanyM] = useState('')
    const[passwordCompany , setPasswordCompany] = useState('')
    // const[signUp, setSignUp] = useState('Sign Up')
    const[nextP, setnextP] = useState(false)

    const SubmitSignUp = (e) => {
        console.log('mormal')
        e.preventDefault()
        if(emailRegisterM === ''){
            document.querySelector('#err_ur').innerHTML = 'Email is Required';
            document.getElementById('err_ur').style.display = 'block'
        }
        if(passwordR === ''){
        document.querySelector('#err_pr').innerText = 'Password is Required';
        document.getElementById('err_pr').style.display = 'block'
        }
        else {
            axios({
                method : 'post',
                    url : `http://localhost:3001/signupdata`,
                    headers : {
                        AuthKey : 'asdfgh'
                    },
                    data : {
                        "email" : emailRegisterM,
                        "password" : passwordR,
                        "category" : "student"
                    }
            }) 
            .then(res=>{
                console.log(res)
                if(res.data.status === 200){
                    console.log(res.data.message)
                    setnextP(true)
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

    if(nextP){
        window.$('#exampleModalCenter').modal('hide');
        // console.log(nextP)
        return(
            <Redirect to= {{
                pathname : "/waiting/:token" 
            }}
            />
        )
    }

    const SubmitCompanySignUp = (e) => {
        console.log("cinapnay")
        e.preventDefault()
        if(emailCompanyM === ''){
            document.getElementById('err_company').innerHTML = 'Email is Required';
            document.getElementById('err_company').style.display = 'block';
        }
        if(passwordCompany === ''){
        document.getElementById('err_pcompany').innerHTML = 'Password is Required';
        document.getElementById('err_pcompany').style.display = 'block';
        }
        // else {
        //     axios({
        //         method : 'post',
        //             url : 'http://localhost:3001/signupdata',
        //             headers : {
        //                 AuthKey : 'asdfgh '
        //             },
        //             // data : {
        //             //     email : username,
        //             //     password : password,
        //                 // category : 
        //             // }
        //     }) 
        //     .then(res=>{
        //         console.log(res)
        //         if(res.data.message === 201){
        //             // setLogin(true)
        //             console.log(res)
        //         }
        //         else {
        //             console.log(res.data.message);
        //         }
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })
        // }
    }

    // if(nextP){
    //     return(
    //         <Redirect
    //             to='/register'
    //         />
    //     )
    // }

    

    return (
        <div>
        {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item dropdown">
                        <button type="button " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary nav-link" >
                            Sign Up
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <button className="dropdown-item" data-toggle="modal" data-target="#exampleModalCenter">As User</button>
                            <button className="dropdown-item" data-toggle="modal" data-target="#companyModalSingUp" >As Company</button>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
            {/* modal for signup */}
            <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title sigU" id="exampleModalCenterTitle">Sign Up</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body pd_rr">
                    <div className='rh_1'>
                        <p className='emr'>Email</p>
                        <input
                            type='email'
                            placeholder = 'name@domain.com'
                            className='inp_r'
                            id='emailR'
                            value={emailRegisterM} 
                            onChange={e=>setEmailRegisterM(e.target.value)}
                        />
                         <p className='error' id='err_ur'>This field cannot be empty</p>
                    </div>
                    <div className='rh_1'>
                        <p className='emr'>Password</p>
                        <input
                            type='password'
                            placeholder = 'at least 8 characters'
                            className='inp_r'
                            id='passwordR' 
                            value={passwordR} 
                            onChange={e=>setPasswordR(e.target.value)}
                        />
                        <p className='error' id='err_pr'>This field cannot be empty</p>
                    </div>
                    {/* dropdown button- sign in with google,2 more options */}
                    <button className='sigU_btn' onClick={SubmitSignUp} >Sign Up</button>
                </div>
                </div>
            </div>
            </div>
            {/* modal for company */}
            <div className="modal fade" id="companyModalSingUp"  role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title sigU" id="exampleModalCenterTitle">Sign Up</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body pd_rr">
                    <div className='rh_1'>
                        <p className='emr'>Official email</p>
                        <input
                            type='email'
                            placeholder = 'name@domain.com'
                            className='inp_r'
                            id='emailCompany'
                            value={emailCompanyM} 
                            onChange={e=>setEmailCompanyM(e.target.value)}
                        />
                         <p className='error' id='err_company'>This field cannot be empty</p>
                    </div>
                    <div className='rh_1'>
                        <p className='emr'>Password</p>
                        <input
                            type='password'
                            placeholder = 'at least 8 characters'
                            className='inp_r'
                            id='passwordCompany' 
                            value={passwordCompany} 
                            onChange={e=>setPasswordCompany(e.target.value)}
                        />
                        <p className='error' id='err_pcompany'>This field cannot be empty</p>
                    </div>
                    {/* dropdown button- sign in with google,2 more options */}
                    <button className='sigU_btn' onClick={SubmitCompanySignUp} >Sign Up</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LandingPage
