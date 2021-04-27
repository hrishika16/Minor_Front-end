import React from 'react'
import error_page from './img/error404.jpg'
import './css/error.css'

function Error404() {
    return (
        <div>
        <div className="container errorMessage">
        <center>
         <img src ={error_page} alt="error 404" width ="100%" ></img> 
       
        <button className="homepageBtn">Back to Homepage</button>
        </center>
        </div>
       
    </div>
    )
}

export default Error404
