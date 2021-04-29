import React,{useState} from 'react'
import axios from 'axios'
import './css/landingP.css'
import { Redirect } from 'react-router'
import targetUsers from './img/users_landing.jpg'
import features from './img/landing_features.png'
import userA from './img/userA.png'
import ca_first from './img/ca_first.jpg'
import ca_second from './img/cs_second.jpg'
import ca_third from './img/ca_three.jpg'
import bg from './img/landingBg.jpg'

import $ from 'jquery'


function LandingPage(props) {

    
    
    const[emailRegisterM , setEmailRegisterM] = useState('')
    const[passwordR , setPasswordR] = useState('')
    const[emailCompanyM,setEmailCompanyM] = useState('')
    const[passwordCompany , setPasswordCompany] = useState('')
    // const[signUp, setSignUp] = useState('Sign Up')
    const[nextP, setnextP] = useState(false)
    const[nextC, setnextC] = useState(false)

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
        else {
            axios({
                method : 'post',
                    url : 'http://localhost:3001/companyRegister',
                    headers : {
                        AuthKey : 'asdfgh'
                    },
                    data : {
                        email : emailCompanyM,
                        password : passwordCompany
                    }
            }) 
            .then(res=>{
                console.log(res)
                console.log(res)
                if(res.data.status === 200){
                    console.log(res.data.message)
                    localStorage.setItem('emailC' , res.data.data[0].email)
                    setnextC(true)
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

    if(nextC){
        window.$('#companyModalSingUp').modal('hide');
        return(
            <Redirect
                to='/registerForCompany'
            />
        )
    }

    

    return (
        <div  className = "mainLanding">
        <div >
        {/* navbar */}
            <nav className="navbar navbar-expand-lg  nav_bg">
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
           
             <div className = "mainLandingL">
             {/* <img src = {bg} alt = "bg"></img> */}
             <center>
             <h1 className = "headingWelcome">Welcome To SyncIn</h1>
             </center>
             </div>

              <br></br>

           <div className="target_user">
           <center>
           <h1 className = "headingUsers">Our Target Users</h1>
           </center>
           <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-12 col-lg-8 ">
                    <img src = {targetUsers} alt = "target users"></img>
                    </div>
                    <div className = "col-12 col-lg-4">
                    <center>
                    <div className="userBoxL">
                    <center>
                   <h1 className = "tochooseL"> Startup Entrepreneurs</h1>
                   </center>
                   </div>

                   <br></br>
                   <div className="userBoxL">
                   <center>
                   <h1 className = "tochooseL">Mentors</h1>
                   </center>
                   </div>
                   <br></br>
                   <div className="userBoxL">
                   <center>
                   <h1 className = "tochooseL">Business Company
                   </h1>
                   </center>
                   </div>
                   <br></br>
                   <div className="userBoxL">
                   <h1 className = "tochooseL">Job Seeker</h1>
                   </div>
                   </center>
                </div>
                {/* <div className = "col-12 col-lg-2">
                <div className="card text-white  mb-3 user_detailsLR">
                   
                    <div className="card-header ">Startup</div>
                    <div className="card-header">Company</div>
                    {/* <div className="card-body">
                        <h5 className="card-title">Dark card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div> */}
                    {/* </div> */} 

                </div>

              
           </div>
           <br></br>
           <center>
           <h2 className = "headingUsers">Our Features</h2>
           <h3 className = "tochooseL">Why To Choose Us</h3>
          
           <img src = {features} alt = "features" ></img>
           </center>
        
           
           </div>
        </div>
{/* carosule  */}
<div >
<center>
    <h1 className = "headingUsers"> Applications </h1>
    <br></br>
    <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
  <ol className="carousel-indicators indiCA">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-primary"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" className=" bg-primary"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="bg-primary "></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block imgCA" src={ca_first} alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block imgCA" src={ca_second} alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block imgCA" src={ca_third} alt="Third slide"></img>
      <div class="carousel-caption d-none d-md-block">
    {/* <h5 className= "headingUsers">Heelo dskhfdsjfh</h5>
    <p>...</p> */}
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </center>
</div>



        {/* our feature */}
        <div>
        <center>
            <h1 className = "headingUsers">Our team members</h1>
            <h2  className = "tochooseL">Follow us !!!</h2>
            </center>
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-3">
                     
                     <img src = {userA} alt = "team 1" className = "teamImg"></img>
                     <h3 className = "tochooseL">Hrishika Saxena </h3>
                    </div>
                    <div className = "col-lg-3">
                    <img src = {userA} alt = "team 1" className = "teamImg"></img>
                    <h3 className = "tochooseL">Khushi Kala </h3>
                        </div>
                        <div className = "col-lg-3">
                        <img src = {userA} alt = "team 1" className = "teamImg"></img>
                        <h3 className = "tochooseL">Pralipta Jena </h3>
                        </div>
                        <div className = "col-lg-3">
                        <img src = {userA} alt = "team 1" className = "teamImg"></img>
                        <h3 className = "tochooseL">Samiksha Khare</h3>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LandingPage
