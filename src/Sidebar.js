import React, { Component } from 'react'
import './css/sidebar.css'
import userIcon from './img/userIcon.svg'

class Sidebar extends Component {
    render() {
        return (
            <div className='cside'>
                <div className='sidebard'> 
                    {/* logo space */}
                    <div className='logo'>
                        LOGO
                    </div>
                    {/* User icon */}
                    <div>
                        <center>
                            <img src={userIcon} alt='user Icon' className='userImg' />
                        </center>
                    </div>
                    <br/>
                    <div className='sidess_11'>
                        <p className='linkss_11'>Profile</p>
                    </div>
                    <div className='sidess_11'>
                        <p className='linkss_11'>Chat Screen</p>
                    </div>
                    <div className='sidess_11'>
                        <p className='linkss_11'>Jobs/Startup</p>
                    </div>
                    <div className='sidess_11'>
                        <p className='linkss_11'>Network</p>
                    </div>
                    <div className='sidess_11'>
                        <p className='linkss_11'>Our Story</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
