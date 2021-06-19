import React from 'react'
import userIcon from './img/userIcon.svg'

function ProfileDetails() {
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
        </div>
    )
}

export default ProfileDetails
