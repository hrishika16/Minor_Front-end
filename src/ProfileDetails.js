import React,{useState} from 'react'
import userIcon from './img/userIcon.svg'

function ProfileDetails() {
    const[user_Name , setName] = useState('')
    const[user_bio , setBio] = useState('')
    const[user_desp , setDesp] = useState('')
    return (
        <div>
            <div className='row'> 
                <div className='col-12'> 
                    <button className='edit_btn_p' data-toggle="modal" data-target="#EditProfileModal">Edit profile</button>
                </div>
            </div>
            <div className='row '>
                <div className='col-lg-5 col_right_pdn'>
                    <img src={userIcon} alt='user Icon' className='userImg1' />
                </div>
                <div className='col-lg-7 col_left_pdn'>
                    <p className='name'>Name</p>
                    <button className='add_bio_btn'> ADD BIO </button>
                    <br/>
                    <textarea className='summary_bx' placeholder='Add summary '></textarea>
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
                                <button className ='btn edit_btn_p' data-dismiss="modal" >&nbsp;Edit &nbsp;</button>
                            {/* </center> */}
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProfileDetails
