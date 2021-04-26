import React from 'react'
import error_page from './img/error404.jpg'
import './css/error.css'

function Error404() {
    return (
        <div>
        <div className="container errorMessage">
        <center>
         <img src ={error_page} alt="error 404" width ="100%" ></img> 
         <h1>Error !</h1>
         <h2>Page Not Found</h2>
        </center>
        </div>
       
    </div>
    )
}

export default Error404
