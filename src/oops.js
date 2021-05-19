import React from 'react'
import ooops from './img/error404.jpg'
import './css/error.css'
import { Link } from 'react-router-dom'

function Error404() {
 
  

    return (
        <div>
        <div className="container errorMessage">
        <center>
         <img src ={oops} alt="error 404" width ="100%" ></img> 
       
        <button className="homepageBtn"><Link to ='/'  style={{ textDecoration: 'none' ,color : '#fff' }}>Back to Homepage </Link></button>
        </center>
        </div>
       
    </div>
    )
}

export default Error404
