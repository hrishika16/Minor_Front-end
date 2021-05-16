import React from 'react'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'
import userIcon from './img/userSearch.png'
import './css/searchPage.css'

function SearchPage() {
    return (
        <div>
            <HeaderUser></HeaderUser>
            <Sidebar></Sidebar>
            <br></br>
            <br></br>
            <br></br>
            <div className = "container columnSearch" >
                <div className = "row">
                    <div className = "col-lg-3">
                       <img src = {userIcon}  width = '150px'></img>
                    </div>
                    <div className = "col-lg-9 cmpnySearchCol">
                      <h2>Company Name</h2>
                     
                       <h4 > Bio </h4>
                    </div>
                </div>
             
            </div>
            <hr></hr>
            <div className = "container cardstart" >
                <div className = "row" >
                    <div className = "col-lg-12">
                      {/* card */}
                      <div className="card cardDesign">
                        <ul className="list-group ">
                            <li className="list-group-item">
                            
                            <div className="card-body">
                            <h5 className="card-title expSearch">Experience</h5>
                            <p className="card-text decripSearch">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            </li>
                            <li className="list-group-item">
                            <div className="card-body">
                            <h5 className="card-title expSearch">Education</h5>
                            <p className="card-text decripSearch">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.</p>

                           </div>
                           </li>
                      </ul>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card cardDesign">
                        <div className="card-header expSearch cardSkills ">
                         <h5>Skills</h5>
                        </div>
                        <div className="card-body">
                           
                            <p className="card-text decripSearch"><span class="dot"></span>With supporting text below </p>
                            <p className="card-text decripSearch"><span class="dot"></span>With supporting below  </p>
                            <p className="card-text decripSearch"><span class="dot"></span>With supporting </p>
                           
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
