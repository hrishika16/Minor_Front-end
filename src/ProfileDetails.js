import React from 'react'
import userIcon from './img/userIcon.svg'

function ProfileDetails() {
    return (
        <div>
            <button className='edit_btn_p' data-toggle="modal" data-target="#EditProfileModal">Edit profile</button>
            <div className='row margin_11'>
                <div className='col-lg-5'>
                    <img src={userIcon} alt='user Icon' className='userImg1' />
                </div>
                <div className='col-lg-7'>
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
