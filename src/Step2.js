import React, { Component } from 'react'
import './css/step2.css'
import star from './img/star.svg'
import $ from 'jquery'
let isChecked;

class Step2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             radioS : '',
             emp_Type: 'emp_type',
             exp_H : 'emp_h'
        }
    }

    handleCheckBox = (e) =>{
        isChecked = e.target.value;
        console.log(isChecked);
   }

   handleEmpType = event =>{
    this.setState({
        emp_Type : event.target.value
    })
   }

   handleExperience = event =>{
    this.setState({
        exp_H : event.currentTarget.value
    })
    console.log(this.state.exp_H)
    this.handleSelectExp()
   }

   handleSelectExp(){
        if(this.state.exp_H == 'yes'){
            document.getElementById('emp_ff').style.display = "block"
        }
        else if(this.state.exp_H == 'no'){
            document.getElementById('emp_ff').style.display = "none"
        }
   }
    
    render() {
        return (
            <div className='whole_22'>
                <div className='container pdddm'>
                    <div className='nnnm'>
                        <p className='step_1'>Step 2</p>
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={e => this.handleCheckBox(e)} value="option1"/>
                            <label className="form-check-label rad_txt" htmlFor="inlineRadio1">Student</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={e => this.handleCheckBox(e)} value="option2"/>
                            <label className="form-check-label rad_txt" htmlFor="inlineRadio2">Employee</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" onChange={e => this.handleCheckBox(e)} value="option3" />
                            <label className="form-check-label rad_txt" htmlFor="inlineRadio3">Startup</label>
                        </div>
                        <div className='common_field'>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>Degree <img src={star} alt='required field' className='requ_1' /></p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='degree'
                                            className='inp_register'
                                            // onChange={}
                                        />
                                        <p className='error_reg' id='error_degree'>Required</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>College Name <img src={star} alt='required field' className='requ_1' /></p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='clg_name'
                                            className='inp_register'
                                            // onChange={}
                                        />
                                        <p className='error_reg' id='error_clg_name'>Required</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>Masters Degree <span className='optnl'>(optional)</span></p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='master_degree'
                                            className='inp_register'
                                            // onChange={}
                                        />
                                        {/* <p className='error_reg' id='error_msdeg'>Required</p> */}
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>College Name <span className='optnl'>(optional)</span></p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='ms_clg_name'
                                            className='inp_register'
                                            // onChange={}
                                        />
                                        {/* <p className='error_reg' id='error_ms_name'>Required</p> */}
                                    </div>
                                </div>
                                
                            </div>
                            <div className='hr_11'>
                                <select className="custom-select emp_select" value={this.state.exp_H} onChange={this.handleExperience}>
                                    <option value='emp_h' className='emp_sel_txt' >Do you have any experience ?</option>
                                    <option value="yes" className='emp_sel_txt'  >Yes </option>
                                    <option value="no" className='emp_sel_txt' >No </option>
                                </select>
                            </div>
                        </div>
                        <div className='employee_field' id='emp_ff'>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>Title </p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='title_desg'
                                            className='inp_register'
                                            // onChange={}
                                        />
                                        <p className='error_reg' id='error_title_desg'>Required</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>Company Name </p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='comp_name'
                                            className='inp_register'
                                            // onChange={}
                                        />
                                        <p className='error_reg' id='error_comp_name'>Required</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>Date Of Joining</p>
                                        <input
                                            type='date'
                                            id='doj'
                                            className='inp_register'
                                            // onChange={}
                                        />
                                        <p className='error_reg' id='error_doj'>Required</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>Internship If any</p>
                                        <input
                                            type='text'
                                            id='doj'
                                            className='inp_register'
                                            // onChange={}
                                        />
                                        <p className='error_reg' id='error_doj'>Required</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hr_11'>
                            <select className="custom-select emp_select" value={this.state.emp_Type} onChange={this.handleEmpType}>
                                <option selected disabled value='emp_type' className='emp_sel_txt_1'>Employee Type</option>
                                <option value="full_time " className='emp_sel_txt'>Full Time </option>
                                <option value="part_time " className='emp_sel_txt'>Part Time </option>
                                <option value="self_employed " className='emp_sel_txt'>Self Employed </option>
                                <option value="freelance" className='emp_sel_txt'>Freelance </option>
                                <option value="internship  " className='emp_sel_txt'>Internship </option>
                                <option value="trainee  " className='emp_sel_txt'>Trainee </option>
                            </select>
                            </div>
                        </div>
                        {/* <div className='hr_11'>
                            <p className='field_names'>School or College/University <img src={star} alt='required field' className='requ_1' /> </p>
                            <input
                                type='text'
                                placeholder='Type here...'
                                id='firstName'
                                className='inp_register'
                                // onChange={}
                            />
                            <p className='error_reg' id='error_fn'>Required</p>
                        </div> */}
                        
                        {/* <div className='hr_11'>
                            <p className='field_names'>Specialization <img src={star} alt='required field' className='requ_1' /></p>
                            <input
                                type='text'
                                placeholder='Type here...'
                                id='contactNo'
                                className='inp_register'
                                // onChange={}
                            />
                            <p className='error_reg' id='error_rnn'>Required</p>
                        </div> */}
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
