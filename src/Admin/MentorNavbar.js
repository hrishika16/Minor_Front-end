import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery'
import syncIn from '../img/logo.png'

class MentorNavbar extends Component {

    handleClickActive(){
        
    }

    render() {
        return (
            <div>
                <div className='pos_prof'>
                <nav className="navbar navbar-expand-lg nav_d ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                    <ul className="navbar-nav mr-auto mt-6">
                    <img src= {syncIn} alt= "logo" className="logoImg"></img>
                       
                        <li className="nav-item">
                            <Link to='/mentorA' className="nav-link link_cls">Profile </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/adminCompany' className="nav-link link_cls">Posts </Link>
                        </li>
                      
                       
                        
                    </ul>
                    <Link to='/adminLogin' className="nav-link link_cls">Logout </Link>
                    </div>
                </nav>
                </div>
            </div>
        )
    }
}

export default MentorNavbar
