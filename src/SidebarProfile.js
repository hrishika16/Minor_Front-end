import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import userProf from './img/userProf.png'
import chat from './img/chat.png'
import story from './img/cardbox.png'
import post from './img/post.png'
import yourStroy from './img/yourStroy.png'
import './css/sidebarProfile.css'

class SidebarProfile extends Component {
    render() {
        return (
            <div className='cside'>
            <div className='sidebard'> 
              <h2 className ="myProfile">My Profile</h2>
                <br/><br/>
                <div className='sidess_11'>
                    {/* <button className='linkss_11'>Profile</button> */}
                    <img src={userProf} alt='user icon' className='side_img' /> <Link to='/aboutUser' className='linkss_12'>Profile/About</Link>
                </div>
                <div className='sidess_11'>
                
                    <img src={chat} alt='user icon' className='side_img' /> <button className='linkss_11'>Chat Screen</button>
                </div>
                <div className='sidess_11'>
                    <img src={story} alt='user icon' className='side_img' /> <button className='linkss_11'>Sucess Stories</button>
                </div>
                <div className='sidess_11'>
                    <img src={post} alt='user icon' className='side_img' /> <button className='linkss_11'>Posts</button>
                </div>
                <div className='sidess_11'>
                    <img src={yourStroy} alt='user icon' className='side_img' /> <button className='linkss_11'>Your Story</button>
                </div>
            </div>
        </div>
        )
    }
}

export default SidebarProfile
