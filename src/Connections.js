import React, { Component } from 'react'
import './css/connection.css'
import HeaderUser from './HeaderUser'
import axios from 'axios'
import userI from './img/userIcon.svg'

class Connections extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            connections : [],
            connections_half : [],
            connections_anotherhalf : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            console.log(resp.data)
            this.setState({
                connections : resp.data,
                connections_half : resp.data.slice(0,7),
                connections_anotherhalf : resp.data.slice(8,14)
                
            })
            console.log("conections half",this.state.connections_half)
        })
        .catch(error =>{
            console.log('err',error)
        })
    }

    renderConnectionsInfo(){
        return this.state.connections_half.map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <div className='box_13'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-3'>
                                <img src={userI} alt='user Icon' className='user_rImg' />
                            </div>
                            <div className='col-lg-9 col-md-9 col-9 padr_dd'>
                                <p className='proff'>{user.username}</p>
                                <p className='profeS'>{user.email}</p>
                                <button className='unfllow_btn'>Unfollow</button>
                            </div>
                        </div>
                    </div>    
               </React.Fragment>
            )
         })
    }
    

    render() {
        return (
            <div className='whole_25'>
                <HeaderUser/>
                <div className='conn_12'>
                    <div>
                        <p className='text-center connectio'>CONNECTIONS</p>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-12'>
                                {this.renderConnectionsInfo()}
                            </div>
                            <div className='col-lg-6 col-12'>
                                {this.renderConnectionsInfoAnother()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connections
