import React from 'react'
import {Link} from 'react-router-dom'
import './css/companyProfile.css'
import userIcon from './img/userIcon.svg'
import userProf from './img/userProf.png'
import post from './img/post.png'

function CompanySidebar() {
    return (
        <div>
            <div className='sidebardCP'> 
                    {/* User icon */}
                    <div>
                        <center>
                            <img src={userIcon} alt='user Icon' className='userImg' />
                        </center>
                    </div>
                    <br/>
                    <br></br>
                    <div className='sidess_11'>
                    <img src={userProf} alt='user icon' className='side_img' />
                        <button className='linkss_11'>Profile</button>
                    </div>
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
            
                        <button className='linkss_11'>Posts</button>
                        {/* <Link to='/hiredetails' className='linkss_11' >Posts</Link> */}
                    </div>
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
                        <button className='linkss_11'>Hire Posts </button>
                    </div>
               
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
                        <button className='linkss_11'>Mentor Post </button>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11 addpos'> + Add Post</button>
                    </div>
                    <div className='sidess_11'>
                        {/* <button className='linkss_11 addpos'> + Add Hire Post</button> */}
                        <Link to='/hiredetails' className='linkss_11 addpos' >+ Add Hire Post</Link> 
                    </div>
                </div>
        </div>
    )
}

export default CompanySidebar
