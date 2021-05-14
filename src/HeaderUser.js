import React, { Component } from 'react'
import './css/headerUse.css'
import logout from './img/logout.svg';
import syncIn from './img/logo.png'
import { Link } from 'react-router-dom'

class HeaderUser extends Component {
    render() {
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
                        <form className="form-inline">
                            <div className="input-group ">
                                <div className="input-group-prepend">
                                    {/* <div className="form-group slect_11"> */}
                                        <select className="form-control slect_11" id="exampleFormControlSelect1">
                                        <option className='slect_11_option'>User</option>
                                        <option className='slect_11_option'>Company</option>
                                        <option className='slect_11_option'>Mentor</option>
                                        </select>
                                    {/* </div> */}
                                </div>
                                <input className="form-control inp_search" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                    <button className="search_btn" type="button">Search</button>
                                </div>
                            </div>
                            
                        </form>
                        <ul className='mr-auto'></ul>
                        <ul className='mr-auto navbar-nav nav_11'>    
                            <li className="nav-item me_1">
                                <button className='add_post_btn' data-toggle="modal" data-target="#exampleAddStory">Add Story</button>
                            </li>
                            <li className="nav-item me_1">
                                <button className='add_post_btn' data-toggle="modal" data-target="#exampleAddPost">Add Post</button>
                            </li>
                            <li className="nav-item dropdown me_1">
                                <button className="nav-item dropdown-toggle see_more_n" type="button" id="mentorDropdownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Settings
                                </button>
                                <div className="dropdown-menu" aria-labelledby="mentorDropdownButton">
                                    <button className="dropdown-item seemore_dropitem" >Help</button>
                                    <button className="dropdown-item seemore_dropitem" >Privacy</button>
                                    <button className="dropdown-item seemore_dropitem1" ><Link to='/' className='log_out_1'> Logout <img src={logout} alt='logout button' className='logg_img' /></Link></button>
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
                            {/* <li>
                                <button className='logout_btn_dd'><Link to='/'> Logout <img src={logout} alt='logout button' className='logg_img' /></Link></button>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                </div>
                {/* modal for signup */}
                <div className="modal fade" id="exampleAddStory"  role="dialog" aria-labelledby="exampleAddStoryTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title sigU" id="exampleAddStoryTitle">Add Your Story Here</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body pd_rr">
                                <textarea className='summary_bx_1' placeholder='Add Description here '></textarea>
                                {/* dropdown button- sign in with google,2 more options */}
                                <button className='sigU_btn'  >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleAddPost"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title sigU" id="exampleModalCenterTitle">Add Your Post Here</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body pd_rr">
                                <textarea className='summary_bx_1' placeholder='Add your thoughts here '></textarea>
                                {/* dropdown button- sign in with google,2 more options */}
                                <button className='sigU_btn'  >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderUser
