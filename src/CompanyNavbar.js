import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery'

function CompanyNavbar(){

    return (
        <div>
            <div className='pos_prof'>
            <nav className="navbar navbar-expand-lg nav_d ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            
                <ul className="navbar-nav mr-auto mt-6">
                    <li className="nav-item active">
                        <Link to='/admin' className="nav-link link_cls">Dashboard </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/userA' className="nav-link link_cls">User </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/mentorA' className="nav-link link_cls">Mentor </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/adminCompany' className="nav-link link_cls">Company </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/jobSeeker' className="nav-link link_cls">Job Seeker </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/adminContactUs' className="nav-link link_cls">Contact Us </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to='/adminLogin' className="nav-link link_cls">Logout </Link>
                    </li> */}
                </ul>
                <Link to='/adminLogin' className="nav-link link_cls">Logout </Link>
                </div>
            </nav>
            </div>
        </div>
    )
}
   

export default CompanyNavbar
