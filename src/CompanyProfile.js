import React from 'react'
import Header from './Admin/Header'
import HeaderUser from './HeaderUser'

function CompanyProfile() {
    return (
        <div>
           <HeaderUser></HeaderUser>
           <div className='cside'>
                <div className='sidebard'> 
                    {/* User icon */}
                    <div>
                        <center>
                            <img src={userIcon} alt='user Icon' className='userImg' />
                        </center>
                    </div>
                    <br/>
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

        </div>
    )
}

export default CompanyProfile
