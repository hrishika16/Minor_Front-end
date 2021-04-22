import React, { Component } from 'react'
import './css/profile.css'
import HeaderUser from './HeaderUser'
import userIcon from './img/userIcon.svg'

class Profile extends Component {
    render() {
        return (
            <div className='whole_27'>
                <HeaderUser/>
                <div className='container-fluid mm_11'>
                    <button className='edit_btn_p'>Edit profile</button>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-lg-2'>
                                    <img src={userIcon} alt='user Icon' className='userImg1' />
                                </div>
                                <div className='col-lg-10'>
                                    <p className='name'>Name</p>
                                    <button className='add_bio_btn'> ADD BIO </button>
                                    <br/>
                                    <textarea className='summary_bx' placeholder='Add summary '></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-lg-3'></div>
                                <div className='col-lg-3'>
                                    <p>Number</p>
                                    <p className='connections_1'>Connections</p>
                                </div>
                                <div className='col-lg-3'>
                                    <p>Number</p>
                                    <p className='requetss_1'>Requests</p>
                                </div>
                                <div className='col-lg-3'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='kindNav'>
                    <nav className="nav nav-pills nav-justified">
                        <a className="nav-item nav-link kindLinkss" href="#">Posts</a>
                        <a className="nav-item nav-link kindLinkss" href="#">Profile/About</a>
                        <a className="nav-item nav-link kindLinkss" href="#">Success stories</a>
                        <a className="nav-item nav-link kindLinkss " href="#" >Your story</a>
                    </nav>
                </div>
                <br/>
                <div className='container'>
                    <center>
                        <div className='post_box'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img src={userIcon} alt='profile' className='post_Img' />
                                </div>
                                <div className='col-9'>
                                    <p className='user_Name'>Name</p>
                                </div>
                            </div>
                            <div className='box_postt'></div>
                            <button className='star_btn'>Star</button> <button className='count_btn'>Count</button>
                        </div>
                    </center>
                </div>
            </div>
        )
    }
}

export default Profile
