import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './css/companyProfile.css'
import userIcon from './img/userIcon.svg'
import userProf from './img/userProf.png'
import post from './img/post.png'

function CompanySidebar() {
    const [subC, setsubC] = useState('')
    const [msgC, setmsgC] = useState('')
    const submitPostsComData = () =>{
        const companyid = localStorage.getItem("companyid")
        axios({
            method : 'post',
            url : 'http://localhost:3001/postInsert',
            data: {
                'id' : companyid,
                'subject' : subC,
                'content' : msgC
            },
            headers : {
            AuthKey : 'asdfgh'
            }
        })
        .then(resp =>{
            if(resp.data.status === 200){
                console.log(resp.data)
                window.$('#companyAddPost').modal('hide');
            }
            else if(resp.data.status === 202) {
            console.log(resp.data.message);
            document.getElementById('post_errorC').innerHTML = resp.data.message
            }
            else{
                document.getElementById('post_errorC').innerHTML = resp.data.message
                console.log(resp.data.message);
            }
        })
        .catch(error =>{
            console.log('err',error)
        })
    }
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
                        <Link to='/companyProfile' className='linkss_11' >Profile</Link>
                        {/* <button className='linkss_11'>Profile</button> */}
                    </div>
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
                        {/* <button className='linkss_11'>Posts</button> */}
                        <Link to='/postC' className='linkss_11' >Posts</Link>
                    </div>
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
                    {/* hirePost */}
                        <Link to='/hirePost' className='linkss_11' >Hire Posts</Link>
                    </div>
                    <div className='sidess_11'>
                    <img src ={post} className ='side_img'></img>
                        <Link to='/mentorPostC' className='linkss_11' >Mentor Posts</Link>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11 addpos' data-toggle="modal" data-target="#companyAddPost"> + Add Post</button>
                    </div>
                    <div className='sidess_11'>
                        {/* <button className='linkss_11 addpos'> + Add Hire Post</button> */}
                        <Link to='/hiredetails' className='linkss_11 addpos' >+ Add Hire Post</Link> 
                    </div>
                </div>
                <div className="modal fade" id="companyAddPost"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                    value={subC}
                                    onChange={e => setsubC(e.target.value)}
                                />
                                <p className='story_p'>Summary</p>
                                <textarea 
                                    className='summary_bx_1' 
                                    placeholder='Add your thoughts here '
                                    value={msgC}
                                    onChange={e => setmsgC(e.target.value)}
                                    ></textarea>
                                <button className='sigU_btn' onClick={submitPostsComData} >Submit</button>
                                <p className='errorr_posts' id='post_errorC'></p>
                            </div>
                        </div>
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
