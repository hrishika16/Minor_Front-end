import React from 'react'
import Header from './Admin/Header'
import HeaderUser from './HeaderUser'
import userIcon from './img/userIcon.svg'
import './css/companyProfile.css'
import building from './img/companyBuilding.jpg'

function CompanyProfile() {
    return (
        <div>
           {/* <HeaderUser></HeaderUser> */}
           <div className='mainCP'>
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
                        <button className='linkss_11'>Profile</button>
                    </div>
                   
                <div className='sidess_11'>
                        <button className='linkss_11'>Jobs/InternShip</button>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11'>Mentor Post </button>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11'>Your Post</button>
                    </div>
                </div>
            </div>
            <div className = "container completeCP">
              <div className = "row">
              
               <div className = "col-12 col-lg-3">
                   <img src = {building} alt ="building" className = "imgCP"></img>
               </div>
               <div className = "col-12 col-lg-9 detailCP">
               <h1 >Company Name </h1>
               <br></br>
               <h3> Email Company </h3>
               <br></br>
               <h4> Since {'$'}Year of Establishment </h4>
                </div>
                
              </div>

            </div>

        </div>
    )
}

export default CompanyProfile
