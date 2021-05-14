import React from 'react'
import './css/companyProfile.css'
import userIcon from './img/userIcon.svg'

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
    )
}

export default CompanySidebar
