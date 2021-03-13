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
                <div className='container'>
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
