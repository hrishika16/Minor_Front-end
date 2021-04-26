import React, { Component } from 'react'
import './css/step2.css'
import star from './img/star.svg'

class Step2 extends Component {
    render() {
        return (
            <div className='whole_22'>
                <div className='container pdddm'>
                    <div className='nnnm'>
                        <p className='step_1'>Step 2</p>
                        <div className='hr_11'>
                            <p className='field_names'>School or College/University <img src={star} alt='required field' className='requ_1' /> </p>
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
                            <p className='field_names'>Specialization <img src={star} alt='required field' className='requ_1' /></p>
                            <input
                                type='text'
                                placeholder='Type here...'
                                id='contactNo'
                                className='inp_register'
                                // onChange={}
                            />
                            <p className='error_reg' id='error_cn'>Required</p>
                        </div>
                        {/* <div className='hr_11'>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className='field_names'>DOB <img src={star} alt='required field' className='requ_1' /></p>
                                    <input
                                        type='date'
                                        className='start_yr_inp'
                                        id='start_y'
                                        // onChange = {}
                                    />
                                </div>
                                <div className='col-6'>
                                    <p className='field_names'>End year <img src={star} alt='required field' className='requ_1' /></p>
                                    <input
                                        type='date'
                                        className='start_yr_inp'
                                        id='end_y'
                                        // onChange = {}
                                    />
                                </div>
                            </div>
                        </div> */}
                        <button className='next_2btn'>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step2
