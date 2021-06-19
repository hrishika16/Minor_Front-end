import React from 'react'
import './css/companyProfile.css'
import userIcon from './img/userIcon.svg'
import userProf from './img/userProf.png'
import post from './img/post.png'

function CompanySidebar() {
    return (
        <div>
            <div className='sidebardCP'> 
                    {/* User icon */}
                    <div>
                        <center>
                            <img src={userIcon} alt='user Icon' className='userImg' />
                        </center>
                    </div>
                    <br/>
                    <br></br>
                    <div className='sidess_11'>
                    <img src={userProf} alt='user icon' className='side_img' />
                        <button className='linkss_11'>Profile</button>
                    </div>
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
            
                        <button className='linkss_11'>Posts</button>
                    </div>
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
                        <button className='linkss_11'>Hire Posts </button>
                    </div>
               
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
                        <button className='linkss_11'>Mentor Post </button>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11 addpos'  data-toggle="modal" data-target="#exampleAddPostCompany"> + Add Post</button>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11 addpos'> + Add Hire Post</button>
                    </div>
                </div>

                {/* ADD post modal  */}
                 
                <div className="modal fade" id="exampleAddPostCompany"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title sigU" id="exampleModalCenterTitle">Add Your Post Here</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body pd_rr">
                            <p className='story_p'>Subject</p>
                            <input
                                    type='text'
                                    placeholder ='Subject'
                                    name='subjectPosts'
                                    className='inp_sub'
                                
                                />
                                <p className='story_p'>Summary</p>
                                <textarea 
                                    className='summary_bx_1' 
                                    placeholder='Add your thoughts here '
                                    
                                    ></textarea>
                                {/* dropdown button- sign in with google,2 more options */}
                                <button className='sigU_btn' >Submit</button>
                                <p className='errorr_posts' id='post_error'></p>
                            </div>
                        </div>
                    </div>
                </div>

  

        </div>
    )
}

export default CompanySidebar
