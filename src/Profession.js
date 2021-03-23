import React, { Component } from 'react'
import './css/profession.css'
import star from './img/star.svg'

class Profession extends Component {
    render() {
        return (
            <div className='whole_23'>
                <div className='container pddd_1'>
                    <div className='nnnm'>
                        <p className='step_3'>Step 3</p>
                        <div className='hr_11'>
                            <p className='field_names'>Interest <img src={star} alt='required field' className='requ_1' /> </p>
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
                            <p className='field_names'>Degree <img src={star} alt='required field' className='requ_1' /></p>
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
                            <p className='field_names'>Experience <img src={star} alt='required field' className='requ_1' /></p>
                            <input
                                type='text'
                                placeholder='Type here...'
                                id='contactNo'
                                className='inp_register'
                                // onChange={}
                            />
                            <p className='error_reg' id='error_cn'>Required</p>
                        </div>
                        <button className='next_2btn'>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profession
