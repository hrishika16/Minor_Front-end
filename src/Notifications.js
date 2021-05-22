import React, { cloneElement } from 'react'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'

function Notifications() {
    return (
        <div className ="wholenotif">
     <HeaderUser></HeaderUser>
     <Sidebar></Sidebar>
     <br></br>
     <br></br>
     <br></br>
     <center>
     <h1 className ="notifhead">Notifications</h1>
     </center>
    
        </div>
    )
}

export default Notifications
