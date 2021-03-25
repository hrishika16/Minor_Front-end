import React,{useState} from 'react'
import axios from 'axios'
import './css/landingP.css'

function LandingPage() {

    const[emailRegisterM , setEmailRegisterM] = useState('')
    const[passwordR , setPasswordR] = useState('')

    const SubmitSignUp = (e) => {
        e.preventDefault()
        
        console.log('clock')
        // authentication.onAuthentication()
        if(emailRegisterM === ''){
            document.querySelector('#err_ur').innerHTML = 'User Name is Required';
            document.getElementById('err_ur').style.display = 'block';
            document.querySelector('#emailR').focus()
        }
        if(passwordR === ''){
        document.querySelector('#err_pr').innerHTML = 'Password is Required';
        document.getElementById('err_pr').style.display = 'block';
        document.querySelector('#passwordR').focus()
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
                    <li className="nav-item">
                    <button type="button" className="btn btn-primary nav-link" data-toggle="modal" data-target="#exampleModalCenter">
                        Sign Up
                    </button>
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
            {/* <!-- Modal --> */}
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
        </div>
    )
}

export default LandingPage