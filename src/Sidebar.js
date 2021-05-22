import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/sidebar.css'
import userIcon from './img/userIcon.svg'
import syncIn from './img/logo.png'
import userProf from './img/userProf.png'
import chat from './img/chat.png'
import story from './img/cardbox.png'
import post from './img/post.png'
import yourStroy from './img/yourStroy.png'
import axios from 'axios'
import notif from './img/notif2.png'

function Sidebar() {

    const [subjectPost, setsubjectPost] = useState('')
    const [msg, setmsg] = useState('')
    // const [subjectStory, setsubjectStory] = useState('')
    const [msgStory, setmsgStory] = useState('')

    const getTheDataFromPosts =() =>{
        const userId = localStorage.getItem('userId')
        axios({
            method : 'post',
            url : 'http://localhost:3001/postInsert',
            data: {
                'id' : userId,
                'subject' : subjectPost,
                'content' :  msg
            },
            headers : {
            AuthKey : 'asdfgh '
            }
        })
        .then(resp =>{
            if(resp.data.status === 200){
                
                console.log(resp.data)
                window.$('#exampleAddPost').modal('hide');
            }
            else if(resp.data.status === 202) {
            console.log(resp.data.message);
            document.getElementById('post_error').innerHTML = resp.data.message
            }
            else{
                document.getElementById('post_error').innerHTML = resp.data.message
                console.log(resp.data.message);
            }
        })
        .catch(error =>{
            console.log('err',error)
        })
    }

    const getTheDataFromStory =() =>{
        const userId = localStorage.getItem('userId')
        axios({
            method : 'post',
            url : 'http://localhost:3001/successPostInsert',
            data: {
                'id' : userId,
                'content' :  msgStory
            },
            headers : {
            AuthKey : 'asdfgh '
            }
        })
        .then(resp =>{
            if(resp.data.status === 200){
                
                console.log(resp.data)
                window.$('#exampleAddPost').modal('hide');
            }
            else if(resp.data.status === 202) {
            console.log(resp.data.message);
            document.getElementById('post_error').innerHTML = resp.data.message
            }
            else{
                document.getElementById('post_error').innerHTML = resp.data.message
                console.log(resp.data.message);
            }
        })
        .catch(error =>{
            console.log('err',error)
        })
    }


        return (
            <div className='cside'>
                <div className='sidebard'> 
                    {/* User icon */}
                    <div>
                        <center>
                            <img src={userIcon} alt='user Icon' className='userImg' />
                        </center>
                    </div>
                    <br/>
                    <div className='sidess_11'>
                        {/* <button className='linkss_11'>Profile</button> */}
                        <img src={userProf} alt='user icon' className='side_img' />
                        <Link to='/profile' className='linkss_12'>Profile</Link>
                    </div>
                    <div className='sidess_11'>
                    <img src={chat} alt='user icon' className='side_img' />
                        <button className='linkss_11'>Chat Screen</button>
                    </div>
                    <div className='sidess_11'>
                    <img src={story} alt='user icon' className='side_img' /> 
                        <Link to='/hiring' className='linkss_12'>Hiring</Link>
                    </div>
                   
                    <div className='sidess_11'>
                    <img src={yourStroy} alt='user icon' className='side_img' />
                        <button className='linkss_11'>Our Story</button>
                    </div>
                    <div className='sidess_11'>
                    <img src={notif} className = "side_img"></img>
                        <button className='linkss_11'>Notifications</button>
                    </div>
                    <div className='sidess_11'>
                 
                        <button className='addStory'  data-toggle="modal" data-target="#exampleAddPost"> + Add Post </button>
                    </div>
                </div>

                {/* add post modal  */}
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
                            <p className='story_p'>Subject</p>
                            <input
                                    type='text'
                                    placeholder ='Subject'
                                    name='subjectPosts'
                                    className='inp_sub'
                                    value={subjectPost}
                                    onChange={e => setsubjectPost(e.target.value)}
                                />
                                <p className='story_p'>Summary</p>
                                <textarea 
                                    className='summary_bx_1' 
                                    placeholder='Add your thoughts here '
                                    value={msg}
                                    onChange={e => setmsg(e.target.value)}
                                    ></textarea>
                                {/* dropdown button- sign in with google,2 more options */}
                                <button className='sigU_btn' onClick={getTheDataFromPosts} >Submit</button>
                                <p className='errorr_posts' id='post_error'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Sidebar
