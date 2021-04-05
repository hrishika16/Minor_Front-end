import React, { Component } from 'react'
import './css/dashboard.css'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'
import axios from 'axios'
import userI from './img/userIcon.svg'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             requests : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            console.log(resp.data)
            this.setState({requests : resp.data})
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
                        <div className='col-lg-4'>
                            <img src={userI} alt='user Icon' className='user_rr' />
                        </div>
                        <div className='col-lg-8'>
                            <p className='userName'>{user.username}</p>
                            <p className='profeSS'>{user.email}</p>
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
                <Sidebar/>
                <div className='main'>
                    <HeaderUser/>
                    <div>
                        <div className='container'>
                            <br/>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='posts'>
                                        <p className='had_txt'>Posts</p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='reqq'>
                                        <p className='had_txt'>Your Requests</p>
                                        
                                            {/* <div className='row'>
                                                <div className='col-lg-4'>
                                                    <img src={user} alt='user Icon' className='user_rr' />
                                                </div>
                                                <div className='col-lg-8'>
                                                    <p className='userName'>Username</p>
                                                    <p className='profeSS'>Profession</p>
                                                </div>
                                            </div> */}
                                            {this.renderRequests()}
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
