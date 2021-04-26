import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
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
                            <Link to='/mentorA' className="nav-link link_cls">Company </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/mentorA' className="nav-link link_cls">Job Seeker </Link>
                        </li>
                    </ul>
                    </div>
                </nav>
                
            </div>
        )
    }
}

export default Header
