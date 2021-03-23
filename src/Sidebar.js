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
                </div>
            </div>
        )
    }
}

export default Sidebar
