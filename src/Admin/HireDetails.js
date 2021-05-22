import React from 'react'
import Sidebar from '../Sidebar'
import Header from './MentorNavbar'

function HireDetails() {
    return (
        <div>
        <Header></Header>
        <Sidebar></Sidebar>
         <br></br>
         <br></br>
         <br></br>
         <center>
         <h2 className = "hiredetailshead">Hire Details </h2>
         </center>
         <form className = "formdetails">
         <label>Role </label>
             <input type= "text"></input>
             <br></br>
             <label>Industry Type  </label>
             <input type= "text"></input>
             <br></br>
             <label>Functional Area </label>
             <input type= "text"></input>
             <br></br>
             <label>Employment </label>
             <input type= "text"></input>
             <label>Role category </label>
             <input type= "text"></input>
             <label>Skills </label>
             <input type= "text"></input>
             <label>Job Description</label>
             <input type= "text"></input>
         </form>
      
        </div>
    )
}

export default HireDetails
