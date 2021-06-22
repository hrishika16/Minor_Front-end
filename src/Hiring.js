import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './css/hiring.css'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'
import hireimg from './img/weAreHiring.png'


function Hiring() {
    // const[role, roleChange] = useState('');
    // const[industoryType , industoryTypeChange ] = useState('');
    // const[functionalArea , functionalAreaChange] = useState('');
    // const[employment ,employmentChange] = useState('')
    // const[roleCategory , roleCategoryChange] = useState('')
    // const[skills , skillsChange] = useState('')
    // //abhi by deafult daal rhi name 
    // const[companyName , companyNameChange] = useState("Company Name")
    // const[companyLoc , companyLocChange] = useState("Location")
    // const[description , descriptionChange] = useState('')

    const [datatoShow, setdatatoShow] = useState([])
    const [dataofHireDetail, setdataofHireDetail] = useState([])


    useEffect( ()=>{
        const postId = localStorage.getItem('rememberMe')
        axios({
            method : 'post',
            url : 'http://localhost:3001/companyHirePost',
            data: {
                'postId' : postId
            },
            headers : {
                AuthKey : 'asdfgh'
            }
        }) 
        .then(resp=>{
            console.log(resp)
            if(resp.data.status === 200){
                setdatatoShow(resp.data.companydata)
                setdataofHireDetail(resp.data.postData)
            }
            else if(resp.data.status === 202) {
            console.log(resp.data.message);
            }
            else{
            console.log(resp.data.message);
            }
        })
        .catch(error=>{
        console.log(error)
        })

        
    },[])

    const renderPostData = () =>{
        return datatoShow.map(user =>{
            return(
                <div key={user.companyId}>
                    <h2 >{user.name}</h2> 
                    <h3>{user.email}</h3> 
                </div>
            )
        })
    }

    const renderHireData = () =>{
        return dataofHireDetail.map(user =>{
            return(
                <div key={user.postID}>
                   <p>Role : &nbsp; {user.role} </p>
                    <p>Industory Type : &nbsp; {user.industryType}</p>
                    <p>Functional Area : &nbsp; {user.functionalArea} </p>
                    <p>Employment : &nbsp;  {user.employmentType} </p>
                    <p>Role Category : &nbsp; {user.roleCategory} </p>
                    <p>Skills : &nbsp; {user.skills}</p>
                    <p>Job Description : &nbsp; {user.description}</p>
                </div>
            )
        })
    }

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
                        {renderPostData()}
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
                                {renderHireData()}
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
