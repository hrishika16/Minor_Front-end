import React,{useState} from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Header from './Admin/MentorNavbar'
import CompanyNavbar from './CompanyNavbar'
import CompanySidebar from './CompanySidebar'
import './css/hireDetails.css'
import $ from 'jquery'
import { computeHeadingLevel } from '@testing-library/dom'

function HireDetails() {
    const[role, roleChange] = useState('');
    const[industoryType , industoryTypeChange ] = useState('')
    const[functionalArea , functionalAreaChange] = useState('')
    const[employmentTest ,employmentChange] = useState('emp_type')
    const[roleCategory , roleCategoryChange] = useState('')
    const[skills , skillsChange] = useState('')
    const[descrip , descripChange] = useState('')

    const handleSubmitSome = (event) =>{
        // event.preventDefault()
        
        // console.log(employment+' ' +role+ ' ' + industoryType + ' ' + functionalArea + ' ' + roleCategory + ' '+ skills +' '+ descrip )
        const companyId = localStorage.getItem('companyid')
        if(functionalArea === ''){
            $('#error_hireComp').css('display', 'block')
            document.getElementById('error_hireComp').innerHTML = 'All fields are required'
        }
        else{
            
        axios({
            method : 'post',
            url : 'http://localhost:3001/companyhirepost',
            headers : {
                AuthKey : 'asdfgh'
            },
            data : {
                'companyid' : companyId,
                'role' : role,
                'industryType' : industoryType,
                'functionalArea' : functionalArea,
                'employmentType ' : employmentTest,
                'RoleCategory ' : roleCategory,
                'skills ' : skills,
                'description' : descrip
            }
        }) 
        .then(res=>{
            
            if(res.data.status === 200){
                console.log(res)
                console.log(employmentTest)
            }
            else if(res.data.status === 202) {
                console.log(res.data.message);
                console.log(employmentTest)
            }
            else{
                console.log(res.data.message);
                console.log(employmentTest)
            }
        })
        .catch(err=>{
            console.log(err)
        })
        }
    }

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
               <label className ="labelHire">Employment Type : </label>
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
               <div className = "formdetails">
                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value={role}
                    onChange=  {(e)=>roleChange(e.target.value)}
                    />
                    <br></br>
                
                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value = {industoryType}
                    onChange = {(e)=>industoryTypeChange(e.target.value)}
                    ></input>
                    <br></br>

                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value = {functionalArea}
                    onChange = {(e)=>functionalAreaChange(e.target.value)}
                    ></input>
                    <br></br>
                    
                    <select className ="inp_hire" value={employmentTest} onChange={e => {employmentChange(e.target.value)}} >
                        <option defaultValue='Full_Time' >Full time</option>
                        <option defaultValue='Part_Time' >Part time</option>
                        <option defaultValue='Permanent_Time'>Permanent Job</option>
                        <option defaultValue='Temporary_Time'>Temporary Job</option>
                    </select>
                   <br></br>
                
                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value ={roleCategory}
                    onChange = {(e) => roleCategoryChange(e.target.value)}
                    ></input>
                    <br></br>
                
                    <input 
                    type= "text"
                    className ="inp_hire"
                    placeholder ="Type Here..."
                    value ={skills}
                    onChange = {(e) => skillsChange(e.target.value)}
                    ></input>
                    <br></br>
                
                    <textarea 
                        placeholder="Enter Descrpition Here..."
                        className = "message_input"
                        value ={descrip}
                        onChange = {(e) => descripChange(e.target.value)}
                            ></textarea>
                        <br></br>

                
                </div>
                </div>
                </div>
                </div>
                <p id='error_hireComp' className='error'>All fields are required</p>
                <button className = "submit_hiredetails" onClick={handleSubmitSome} >Submit</button>
                </center>
                </div>
    )
}

export default HireDetails
