import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/sidebar.css'
import userIcon from './img/userIcon.svg'
import syncIn from './img/logo.png'

class Sidebar extends Component {
    render() {
        return (
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
                        {/* <button className='linkss_11'>Profile</button> */}
                        <Link to='/profile' className='linkss_12'>Profile</Link>
                    </div>
                    <div className='sidess_11'>
                    
                        <button className='linkss_11'>Chat Screen</button>
                    </div>
                    <div className='sidess_11'>
                        <Link to='/internship' className='linkss_12'>Hiring</Link>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11'>Network</button>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11'>Our Story</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
