import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/registerU.css'
import star from './img/star.svg'

class RegisterU extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             nextPage2 : false
        }
    }

    // setToNextPage(){
    //     this.setState({
    //         nextPage2 : true
    //     })
    // }
    
    render() {
        return (
            <div className='whole_12'>
                <div className='container pddd'>
                    <div className='nnn'>
                    <p className='step_1'>Step 1</p>
                    <div className='hr_11'>
                        <p className='field_names'>First Name <img src={star} alt='required field' className='requ_1' /> </p>
                        <input
                            type='text'
                            placeholder='Type here...'
                            id='firstName'
                            className='inp_register'
                            // onChange={}
                        />
                        <p className='error_reg' id='error_fn'>Required</p>
                    </div>
                    <div className='hr_11'>
                        <p className='field_names'>Middle Name <span className='optnl'>(optional)</span> </p>
                        <input
                            type='text'
                            placeholder='Type here...'
                            id='middleName'
                            className='inp_register'
                            // onChange={}
                        />
                    </div>
                    <div className='hr_11'>
                        <p className='field_names'>Last Name <img src={star} alt='required field' className='requ_1' /></p>
                        <input
                            type='text'
                            placeholder='Type here...'
                            id='lastName'
                            className='inp_register'
                            // onChange={}
                        />
                        <p className='error_reg' id='error_ln'>Required</p>
                    </div>
                    <div className='hr_11'>
                        <p className='field_names'>Contact Number <img src={star} alt='required field' className='requ_1' /></p>
                        <input
                            type='text'
                            placeholder='Type here...'
                            id='contactNo'
                            className='inp_register'
                            // onChange={}
                        />
                        <p className='error_reg' id='error_cn'>Required</p>
                    </div>
                    <div className='hr_11'>
                        <p className='field_names'>Address <img src={star} alt='required field' className='requ_1' /></p>
                        <input
                            type='text'
                            placeholder='Type here...'
                            id='address'
                            className='inp_register'
                            // onChange={}
                        />
                        <p className='error_reg' id='error_add'>Required</p>
                    </div>
                    <button  className='next_btn_1'><Link to='/page2' className='pp'>Next</Link></button>
                </div>
                </div>
            </div>
        )
    }
}

export default RegisterU
