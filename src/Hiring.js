import React,{useState} from 'react'
import './css/hiring.css'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'
import hireimg from './img/weAreHiring.png'


function Hiring() {
  const[role, roleChange] = useState('');
  const[industoryType , industoryTypeChange ] = useState('');
  const[functionalArea , functionalAreaChange] = useState('');
  const[employment ,employmentChange] = useState('')
  const[roleCategory , roleCategoryChange] = useState('')
  const[skills , skillsChange] = useState('')


    return (
        <div>
        <HeaderUser></HeaderUser>
            <Sidebar></Sidebar>
            <br></br>
            <br></br>
            <br></br>
            <div className = "container wholeHiring">
                <div className = "row">
             
                    <div className = "col-lg-9 headHiring">
                        <h2 >Company Name</h2>
                        <h3>Location</h3>
                        <button>Apply on Comapny Website</button>
                    </div>
                    <div className = "col-lg-3">
                        <img src = {hireimg} width = "450px" className = "imghire"></img>
                        </div>
                       
                </div>
            </div>
            <hr></hr>
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-12">
                        <h3>Job Requirements</h3>
                        <br></br>
                        <div className = "container" >
                         <div className = "row">
                             <div className = "col-lg-12">
                                <p>Role : &nbsp; {role} </p>
                                <p>Industory Type : &nbsp; {industoryType}</p>
                                <p>Functional Area : &nbsp; {functionalArea} </p>
                                <p>Employment : &nbsp;  {employment} </p>
                                <p>Role Category : &nbsp; {roleCategory} </p>
                                <p>Skills : &nbsp; {skills}</p>
                            </div>
                             
                         </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hiring
