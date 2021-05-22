import React from 'react'
import oops from './img/oops.jpg'
import './css/error.css'
import { Link } from 'react-router-dom'

function Oops() {
 
  

    return (
        <div>
        <div className="container">
        <center>
        <div className = "row">
            <div className = "col-lg-12">
            <h1 className = "nodata">No Data Found</h1>
            <img src ={oops} alt="error 404" className = "oopsImg"></img> 
            </div>
        </div>
      
       
        <button className="homepageBtn"><Link to ='/'  style={{ textDecoration: 'none' ,color : '#fff' }}>Back to Homepage </Link></button>
        </center>
        </div>
       
    </div>
    )
}

export default Oops
