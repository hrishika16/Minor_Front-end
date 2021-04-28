import React from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import userIcon from '../img/userIcon.svg'

function MentorPost() {
    return (
        <div>
            <Header></Header>
           
            <div>
            
                <div className='container'>
                    <center>
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
                    </center>
                </div>
            </div>
        </div>
    )
}

export default MentorPost
