import React, { Component } from 'react'
import './css/headerUse.css'

class HeaderUser extends Component {
    render() {
        return (
            <div className='bg_he'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            </form>
                            </li>
                            <li class="nav-item">
                                <button>Add Post</button>
                            </li>
                            <li class="nav-item">
                                <div className="dropdown nav-item">
                                    <button className="dropdown-toggle see_more" type="button" id="mentorDropdownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        See more
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="mentorDropdownButton">
                                        <a className="dropdown-item seemore_dropitem" href="#">Add</a>
                                        <a className="dropdown-item seemore_dropitem" href="#">Remove</a>
                                        <a className="dropdown-item seemore_dropitem1" href="#">More Details</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderUser
