import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CompanyNavbar from './CompanyNavbar'
import CompanySidebar from './CompanySidebar'
import userI from './img/userIcon.svg'
import './css/companyAllPost.css'
function CompanyAllPost() {

    const [compDatat, setcompDatat] = useState([])
    const [reqqq, setreqqq] = useState([])
    const companyId = localStorage.getItem('companyid')

    useEffect( ()=>{
        axios({
            method : 'post',
            url : 'http://localhost:3001/companyallHirePost',
            data: {
                'companyid' : companyId
            },
            headers : {
                AuthKey : 'asdfgh'
            }
        }) 
        .then(resp=>{
            console.log(resp)
            if(resp.data.status === 200){
                setcompDatat(resp.data.data)
                console.log(resp.data)
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

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            console.log(resp.data)
            setreqqq(resp.data.slice(0,7))
        })
        .catch(error =>{
            console.log('err',error)
        })
    },[])

    const renderPostsIncomap =() =>{
        return compDatat.map((user) => {
            return (
                <React.Fragment key={user.postID}>
                    <div className='post_boxM'>
                        <div className='card cardDesign'> 
                        {/* roles */}
                        <div className  ="card-body">
                            <div className='row '>
                                <div className = "col-lg-4">
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
                                    <label className ="labelHire">Job Description :</label>
                                </div>    
                                <div className='col-8'>
                                    <p className ="labelHireValue">{user.role}</p>
                                    <p className ="labelHireValue">{user.industryType}</p>
                                    <p className ="labelHireValue">{user.functionalArea}</p>
                                    <p className ="labelHireValue">{user.employmentType}</p>
                                    <p className ="labelHireValue">{user.RoleCategory}</p>
                                    <p className ="labelHireValue">{user.skills}</p>
                                    <p className ="labelHireValue">{user.description}</p>
                                </div>
                            </div>
                            </div>
                            {/* <div className=' box_posttM'>
                                <p className = "box_posttSubH">Subject:<span className='something'> {user.subject} </span> </p>
                                <p  className = "box_posttSubH" >Message  </p>
                                <p className='msg_post'>
                                {user.content}
                                </p>
                                <br></br>
                            </div>  */}
                        </div>    
                    </div>
                </React.Fragment>
            )
        })
    }

    const renderRequestsComp = () =>{
        return reqqq.map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <div className='box_11'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <img src={userI} alt='user Icon' className='user_rr' />
                            </div>
                            <div className='col-lg-9 padr_dd'>
                                <p className='userName'>{user.username}</p>
                                <p className='profeSS'>{user.email}</p>
                            </div>
                        </div>
                    </div>    
                </React.Fragment>
            )
        })
    }

    return (
        <div className='contt'>
            <CompanyNavbar></CompanyNavbar>
            <CompanySidebar></CompanySidebar>    
            <div className='main'>
                    
                    <div>
                        <div className='container'>
                            <br/>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='posts'>
                                        <p className='had_txt'>Posts</p>
                                        <center>
                                        {renderPostsIncomap()}
                                    </center>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='reqq pos_ff'>
                                        <p className='had_txt'>Your Requests</p>
                                        {renderRequestsComp()}
                                        <center><button className='see_btn_dd'>See More</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CompanyAllPost
