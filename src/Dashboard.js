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
             request : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            console.log(resp.data)
            this.setState({
                requests : resp.data.slice(0,7) ,
                request : this.state.requests.slice(0,7) 
            })
            console.log(this.state.requests)
        })
        .catch(error =>{
            console.log('err',error)
        })
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
                                <div className='col-md-4'>
                                    <div className='reqq'>
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
