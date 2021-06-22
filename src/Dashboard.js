import React, { Component } from 'react'
import './css/dashboard.css'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'
import axios from 'axios'
import userI from './img/userIcon.svg'
import userIcon from './img/userIcon.svg'


class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            requests : [],
            request : [],
            postsData : [],
            page : 1
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            // console.log(resp.data)
            this.setState({
                requests : resp.data.slice(0,7) ,
                request : this.state.requests.slice(0,7)  
            })
            console.log(this.state.requests)
        })
        .catch(error =>{
            console.log('err',error)
        })
        
        this.LoadMoreS()
        
    }


    renderRequests(){
        return this.state.requests.map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <div className='box_11'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <img src={userI} alt='user Icon' className='user_rr' />
                            </div>
                            <div className='col-lg-9 padr_dd'>
                                <p className='userName'>{user.username}</p>
                                <p className='profeSS'>{user.email}</p>
                                {/* <p className='userName'>Username</p>
                                <p className='profeSS'>profession</p> */}
                            </div>
                        </div>
                    </div>    
                </React.Fragment>
            )
        })
    }

    renderPostsInDashBoard(){
        return this.state.postsData.map((user) => {
            return (
                <React.Fragment key={user.postID}>
                    <div className='post_boxM'>
                        <div className='someborder'>
                            <div className='row '>
                                <div className='col-3 '>
                                    <img src={userIcon} alt='profile' className='post_ImgM' />
                                </div>
                                <div className='col-9'>
                                    <p className='user_NameM'>{user.name}</p>
                                </div>
                            </div>
                            <div className=' box_posttM'>
                                <p className = "box_posttSubH">Subject:<span className='something'> {user.subject} </span> </p>
                                <p  className = "box_posttSubH" >Message  </p>
                                <p className='msg_post'>
                                {user.content}
                                </p>
                                <br></br>
                            </div> 
                        </div>    
                    </div>
                </React.Fragment>
            )
        })
    }

    LoadMoreS(){
        // all posts api
        axios({
            method : 'post',
            url : 'http://localhost:3001/loadmorePost',
            headers : {
            AuthKey : 'asdfgh'
            },
            data : {
                'page' : this.state.page
            }
        })
        .then(resp =>{
            if(resp.data.status === 200){
                console.log(resp.data)
                this.setState({
                    postsData : resp.data.data  
                })
                console.log(this.state.postsData)
            }
            else if(resp.data.status === 202) {
            console.log(resp.data.message);
            }
            else{
                console.log(resp.data.message);
            }
        })
        .catch(error =>{
            console.log('err',error)
        })
    }
    
    render() {
        return (
            <div className='contt'>
                <HeaderUser/>
                <Sidebar/>
                <div className='main'>
                    
                    <div>
                        <div className='container'>
                            <br/>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='posts'>
                                        <p className='had_txt'>Posts</p>
                                        <center>
                                        {this.renderPostsInDashBoard()}
                                        {/* <button className='see_btn_dd' onClick={this.LoadMoreS}>Load More</button> */}
                                    </center>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='reqq pos_ff'>
                                        <p className='had_txt'>Your Requests</p>
                                        {this.renderRequests()}
                                        <center><button className='see_btn_dd'>See More</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
