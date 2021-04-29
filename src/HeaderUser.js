import React, { Component } from 'react'
import './css/headerUse.css'
import logout from './img/logout.svg';
import syncIn from './img/logo.png'

class HeaderUser extends Component {
    render() {
        return (
            <div className='bg_he'>
                <div className='tryyy'>
                <nav className="navbar navbar-expand-lg ">
                {/* logo space */}
                    <div className='logo class="navbar-brand"'>
                     <img src= {syncIn} alt= "logo" className="logoImg"></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className='mr-auto'></ul>
                        <form className="form-inline">
                            <input className="form-control inp_search" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                        {/* <ul className='mr-auto'></ul> */}
                        <ul className='mr-auto navbar-nav nav_11'>    
                            <li className="nav-item me_1">
                                <button className='add_post_btn'>Add Post</button>
                            </li>
                            <li className="nav-item dropdown me_1">
                                <button className="nav-item dropdown-toggle see_more_n" type="button" id="mentorDropdownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Settings
                                </button>
                                <div className="dropdown-menu" aria-labelledby="mentorDropdownButton">
                                    <a className="dropdown-item seemore_dropitem" href="#">Add</a>
                                    <a className="dropdown-item seemore_dropitem" href="#">Remove</a>
                                    <a className="dropdown-item seemore_dropitem1" href="#">More Details</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown me_1">
                                <button className="nav-item dropdown-toggle see_more_n" type="button" id="mentorDropdownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Notifications
                                </button>
                                <div className="dropdown-menu" aria-labelledby="mentorDropdownButton">
                                    <a className="dropdown-item seemore_dropitem" href="#">Add</a>
                                    <a className="dropdown-item seemore_dropitem" href="#">Remove</a>
                                    <a className="dropdown-item seemore_dropitem1" href="#">More Details</a>
                                </div>
                            </li>
                            <li>
                                <button className='logout_btn_dd'> Logout <img src={logout} alt='logout button' className='logg_img' /></button>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>
            </div>
        )
    }
}

export default HeaderUser
