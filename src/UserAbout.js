import React from 'react'
import './css/userAbout.css'
import ProfileDetails from './ProfileDetails'
import SidebarProfile from './SidebarProfile'
import HeaderUser from './HeaderUser'

function UserAbout() {
    return (
        <div className='whole_27'>
            <HeaderUser/>
            <SidebarProfile/>
            <div className='main_prof mm_11'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-12'>
                            <div className='about_prof'>
                                <h2 className='about_heading'>Experience</h2>
                                <ul className='border_ull'>
                                    <li>
                                        <p className='sub_heading'>Lorem Ipsum es simplemente</p>
                                        <p className='normal_para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                        </p>
                                    </li>
                                    <li>
                                        <p className='sub_heading'>Lorem Ipsum es simplemente</p>
                                        <p className='normal_para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                        </p>
                                    </li>
                                </ul>
                                <br/>
                                <h2 className='about_heading'>Education</h2>
                                <ul className='border_ull' >
                                    <li>
                                        <p className='sub_heading'>Lorem Ipsum es simplemente</p>
                                        <p className='normal_para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                        </p>
                                    </li>
                                    <li>
                                        <p className='sub_heading'>Lorem Ipsum es simplemente</p>
                                        <p className='normal_para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                        </p>
                                    </li>
                                </ul>
                                <br/>
                                <h2 className='about_heading'>Skills</h2>
                                <ul >
                                    <li>
                                        <p className='sub_heading'>Lorem Ipsum es simplemente</p>
                                        <p className='normal_para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                        </p>
                                    </li>
                                    <li>
                                        <p className='sub_heading'>Lorem Ipsum es simplemente</p>
                                        <p className='normal_para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-1 col-0'></div>
                        <div className='col-lg-4 col-12 '>
                            <div className='reqq'>
                                <ProfileDetails/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAbout
