import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Admin/MentorNavbar'
import CompanyNavbar from './CompanyNavbar'
import CompanySidebar from './CompanySidebar'
import './css/hireDetails.css'

function HireDetails() {
    const[role, roleChange] = useState('');
    const[industoryType , industoryTypeChange ] = useState('');
    const[functionalArea , functionalAreaChange] = useState('');
    const[employment ,employmentChange] = useState('')
    const[roleCategory , roleCategoryChange] = useState('')
    const[skills , skillsChange] = useState('')
    const[descrip , descripChange] = useState('')

    

    return (
        <div className = "mainCP">
        <CompanyNavbar></CompanyNavbar>
        <br></br>
        <br></br>
        <CompanySidebar></CompanySidebar>       
        <br></br>
     
         <center>
         <h1 className = "hiredetailshead">Hire Details </h1>
         <br></br>
   

         <div className = "container">
           <div className = "row">
               <div className = "col-lg-6">
               <label className ="labelHire">Role : </label>
               <br></br>
               <label className ="labelHire">Industry Type : </label>
               <br></br>
               <label className ="labelHire">Functional Area : </label>
               <br></br>
               <label className ="labelHire">Employment : </label>
               <br></br>
               <label className ="labelHire">Role category : </label>
               <br></br>
               <label className ="labelHire">Skills : </label>
               <br></br>
               <br></br>
               <label className ="labelHire">Job Description :</label>
               <br></br>

               </div>
               <div className = "col-lg-6">
               <form className = "formdetails">
                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value={role}
                  onchange=  {(e)=>roleChange(e.target.value)}
                    ></input>
                    <br></br>
                
                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value = {industoryType}
                    onchange = {(e)=>industoryTypeChange(e.target.value)}
                    ></input>
                    <br></br>

                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value = {functionalArea}
                    onchange = {(e)=>functionalAreaChange(e.target.value)}
                    ></input>
                    <br></br>
                    
                    <select className ="inp_hire">
                        <option>Full time</option>
                        <option>Part time</option>
                        <option>Permanent Job</option>
                        <option>Temporary Job</option>
                    </select>
                   <br></br>
                
                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value ={roleCategory}
                    onchange = {(e) => roleCategoryChange(e.target.value)}
                    ></input>
                    <br></br>
                
                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value ={skills}
                    onchange = {(e) => skillsChange(e.target.value)}
                    ></input>
                    <br></br>
                
                    <textarea 
                        placeholder="Enter Descrpition Here..."
                        className = "message_input"
                        value ={descrip}
                        onchange = {(e) => descripChange(e.target.value)}
                            ></textarea>
                        <br></br>

                
                </form>
                </div>
                    </div>
                    </div>
                    
                    <button className = "submit_hiredetails">Submit</button>
                    </center>
                    </div>
    )
}

export default HireDetails
