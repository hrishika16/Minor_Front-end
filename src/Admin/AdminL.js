import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/adminL.css'
import $ from 'jquery'
import bar from '../img/bar3.svg'
import bargraph from "../img/bargraph.svg";
import Header from './Header';


export class AdminL extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }

    componentDidMount() {
        $(document).ready(function(){
            $('#sidebarCollapse').on('click', function () {
                $('#sidebarp, #content').toggleClass('active');
                $('.overlay').toggleClass('active');
            });
            $('.overlay').on('click', function(){
                $('.overlay').toggleClass('active');
                $('#sidebarp, #content').toggleClass('active');
            });
        });
    }
    

    render() {
        return (
            <div className='brk'>
            {/* navbar */}
                <Header/>
                {/* dashboard */}
                <div className='container some_class'>
                <center>
                <h1 className ="analysis">Analysis</h1>
                </center>
                <div className ="container">
                <center>
                    <div className ="row">
                        <div className ="col-lg-6">
                        
                            <div className="cardAdmin">
                                <center>
                                <br></br>
                                <h2 className ="headingCard">Users</h2>
                                </center>
                                <div className="contentBx">
                                    <div className="size">
                                    <h3>Total  :</h3>
                                    <span>100</span>
                                    <h3>JOb Sekeers</h3>
                                    <span>100</span>
                                    <h3>Internships</h3>
                                    <span>100</span>
                                </div>
                            </div>
                            </div>
                            
                            {/* other */}
                            <div className="cardAdmin">
                                <center>
                                <br></br>
                                <h2 className ="headingCard">Company</h2>
                                </center>
                                <div className="contentBx">
                                <div className="size">
                                        <h3>Total  :</h3>
                                        <span>100</span>
                                        <h3>Total Posts</h3>
                                        <span>100</span>
                                        <h3>Total Hiring Posts</h3>
                                        <span>100</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                   
                        <div className ="col-lg-6">
                        <div className="cardAdmin">
                                <center>
                                <br></br>
                                <h2 className ="headingCard">Mentor</h2>
                                </center>
                                <div className="contentBx">
                                <div className="size">
                                        <h3>Total  :</h3>
                                        <span>15</span>
                                        <h3>Total Posts</h3>
                                        <span>100</span>
                                </div>
                            </div>
                            
                            </div>
                            {/* other */}
                            <div className="cardAdmin">
                                <center>
                                <br></br>
                                <h2 className ="headingCard">Contacts</h2>
                                </center>
                                <div className="contentBx">
                                <div className="size">
                                        <h3>Total  :</h3>
                                        <span>10</span>
                                        <h3>Contact Us </h3>
                                        <span>10</span>
                                </div>
                            </div>
                            
                            </div>
                   
                   </div> 
                </div>
                </center>
                </div>
                  
                    <div>
                        <img src={bargraph} alt='graph1' className='graph_img' />
                    </div>
                    <div>
                        <img src={bar} alt='graph2' className='graph_img' />
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminL
