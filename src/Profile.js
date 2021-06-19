import React,{useState} from 'react'
import './css/profile.css'
import HeaderUser from './HeaderUser'
import userIcon from './img/userIcon.svg'
import ProfileDetails from './ProfileDetails'
import SidebarProfile from './SidebarProfile'

function Profile() {

   

    return (
        <div className='whole_27'>
                <HeaderUser/>
                <SidebarProfile/>
                <div className='main_prof mm_11'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-12'>
                        {/* <center> */}
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
                    {/* </center> */}
                        </div>
                        <div className='col-lg-1 col-0'></div>
                        <div className='col-lg-4 col-12 col_pdddd'>
                            <div className='reqq'>
                                <ProfileDetails/>
                            </div>
                        {/* <div className='col-lg-6'>
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
                        </div> */}
                        </div>
                    </div>
                </div>
                    
                </div>
                
                {/* profile about  */}
                <div className="container"  >
                 <div className = "row">
                     <div className = "col-lg-6">
                         
                     </div>
                 </div>

                </div>

            </div>
    )
}

export default Profile



