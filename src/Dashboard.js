import React, { Component } from 'react'
import './css/dashboard.css'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'

class Dashboard extends Component {
    render() {
        return (
            <div className='contt'>
                <Sidebar/>
                <div className='main'>
                    <HeaderUser/>
                    <div>
                        <div className='container'>
                            <p className='had_txt'>Dashboard</p>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='posts'></div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='reqq'></div>
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
