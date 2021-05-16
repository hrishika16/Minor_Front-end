import React,{useState} from 'react'
import './css/profile.css'
import HeaderUser from './HeaderUser'
import userIcon from './img/userIcon.svg'
import ProfileDetails from './ProfileDetails'
import SidebarProfile from './SidebarProfile'

function Profile() {

    const[user_Name , setName] = useState('')
    const[user_bio , setBio] = useState('')
    const[user_desp , setDesp] = useState('')

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
                        <div className='col-lg-4 col-12 '>
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
                {/* Edit Modal */}
                <div className="modal fade" id="EditProfileModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <center> */}
                            <img src={userIcon} alt='user Icon' className='userImg1' />
                            
                                <p className='profile_md'>NAME</p>
                                <input
                                     type='text'
                                    className='inp_prof'
                                    id='username'
                                    maxLength='50'
                                    value={user_Name} 
                                    onChange={e=>setName(e.target.value)}
                                />
                                <p className='profile_md'>BIO</p>
                                <input
                                     type='text'
                                    className='inp_prof'
                                    id='user_bio'
                                    maxLength='50'
                                    value={user_bio} 
                                    onChange={e=>setBio(e.target.value)}
                                />
                                <p className='profile_md'>DESCRIPTION</p>
                                <textarea
                                     type='text'
                                    className='inp_prof'
                                    id='username'
                                    value={user_desp} 
                                    onChange={e=>setDesp(e.target.value)}
                                />
                            {/* </center> */}
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



