import React, { useState } from 'react'
import axios from 'axios'
import './css/headerUse.css'
import logout from './img/logout5.svg';
import syncIn from './img/logo.png'
import { Link } from 'react-router-dom'
import home from './img/home.jpg'

function CompanyNavbar() {

    return (
            <div className=''>
                <div className='tryyy bg_he'>
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
                        <ul className='mr-auto'></ul>
                        <ul className='mr-auto'></ul>
                        <ul className='mr-auto'></ul>
                        <ul className='mr-auto'></ul>
                        <ul className='mr-auto navbar-nav nav_11'>   
                            <li className ="nav-item">
                                <Link to ='/dashboard'>
                                <img src = {home} className="homeDashboard" ></img>
                                </Link>
                            </li>
                            <li className = "nav-item me_1">
                            <button className="logout_btn_dd" ><Link to='/' className='log_out_1'> Logout <img src={logout} alt='logout button' className='logg_img' /></Link></button>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>
            </div>
        )
    
}

export default CompanyNavbar
