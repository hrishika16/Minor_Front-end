import React from 'react'
import waitImage from './img/waitImage.jpg'
import './css/waiting.css'

function Waiting() {
    return (
        <div className="mainWaiting">
        <center>
        <h1 className="waitHeading">Wait For Some Time... </h1>
        <br></br>
            <img src ={waitImage}  alt = "Wait for some time " className="imgWaiting"></img>
            </center>
        </div>
    )
}

export default Waiting
