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
  //abhi by deafult daal rhi name 
  const[companyName , companyNameChange] = useState("Company Name")
  const[companyLoc , companyLocChange] = useState("Location")
  


    return (
        <div>
        <HeaderUser></HeaderUser>
            <Sidebar></Sidebar>
            <br></br>
            <br></br>
            <br></br>
            <div className = "container wholeHiring">
                <div className = "row">
             
                    <div className = "col-lg-7 headHiring">
                    <br></br>
                    <br></br>
                        <h2 >{companyName}</h2>
                       
                        <h3>{companyLoc}</h3>
                        <button>Apply on Company Website</button>
                    </div>
                    <div className = "col-lg-5">
                    <center>
                        <img src = {hireimg}  className = "imghire"></img>
                        </center>
                        </div>
                       
                </div>
            </div>
            <hr></hr>
            <div className = "container">
            <center>
                <div className = "row">
                    <div className = "col-lg-12">
                  
                        <h3 className = "jobhead">Job Requirements</h3>
                      
                        <div className = "container" >
                        <center>
                         <div className = "row">
                         
                             <div className = "col-lg-12 roles">
                                <p>Role : &nbsp; {role} </p>
                                <p>Industory Type : &nbsp; {industoryType}</p>
                                <p>Functional Area : &nbsp; {functionalArea} </p>
                                <p>Employment : &nbsp;  {employment} </p>
                                <p>Role Category : &nbsp; {roleCategory} </p>
                                <p>Skills : &nbsp; {skills}</p>
                            </div>
                        
                         </div>
                         </center>
                        </div>
                    </div>
                </div>
                </center>
            </div>
        </div>
    )
}

export default Hiring
