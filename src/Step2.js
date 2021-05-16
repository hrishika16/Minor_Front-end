import React, { Component } from 'react'
import './css/step2.css'
import star from './img/star.svg'
import $ from 'jquery'
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios'
let isChecked;

class Step2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            radioS : '',
            emp_Type: 'emp_type',
            exp_H : 'emp_h',
            buttonValue : false,
            email : '',
            category :'',
            schoolName : '',
            schoolBoard : '',
            degree : '',
            colleageName : '',
            MasterDegree : '',
            colleageName2 : '',
            designation : '',
            companyName : '',
            dateofJoining :''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        
    }

    handleSubmit(){
     
        // const {category,schoolName,schoolBoard,degree,colleageName,MasterDegree,emp_Type,colleageName2,designation,companyName,dateofJoining} = this.state;
        axios({
            method : 'post',
            url : 'http://localhost:3001/page2',
            headers : {
                AuthKey : 'asdfgh'
            },
            data : {
                'category' : this.state.category,
                'schoolName' : this.state.schoolName,
                'schoolBoard' : this.state.schoolBoard,
                'degree' : this.state.degree,
                'colleageName' : this.state.colleageName,
                'MasterDegree' : this.state.MasterDegree,
                'colleageName2 ' : this.state.colleageName2,
                'designation' : this.state.designation,
                'companyName' : this.state.companyName,
                'dateofJoining' : this.state.dateofJoining,
                'jobType' : this.state.jobType,
                'email' : "khushikala2000@gmail.com"
            }
        }) 
        .then(res=>{
            console.log(res)
            console.log(res)
            if(res.data.status === 200){
                console.log(res.data.message)
                localStorage.setItem('emailC' , res.data.data[0].email)
                this.handleCompChange()
                if(this.state.buttonValue){
                    return(
                        <Redirect to= {{
                            pathname : "/step3" 
                        }}
                        />
                    )
                }
            }
            else if(res.data.status === 202) {
            // console.log(res.data.message);
            console.log(" Please center with correct credentials")
            }
            else{
                console.log("Some error occured")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleCheckBox = (e) =>{
        this.setState({
           category: e.target.value
           
        })
      
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
    
    }

    handelChange = (event)=>{
        this.setState({
        [event.target.name]: event.target.value
        })
        
    }

    handleCompChange = () =>{
        this.setState({
            buttonValue : true
        })
    }

    



    handleExp= event =>{
        event.preventDefault()
        console.log(this.state.exp_H)
        if(this.state.exp_H == 'Yes'){
            document.getElementById('emp_ff').style.display = "block"
            this.setState({buttonValue : true})
            console.log(this.state.buttonValue)
        }
        else if(this.state.exp_H == 'No'){
            document.getElementById('emp_ff').style.display = "none"
            return(
                <Redirect
                    to='/dashboard'
                />
            )
        }
    }

    
    render() {
        const {category,schoolName,schoolBoard,degree,colleageName,MasterDegree,colleageName2,designation,companyName,dateofJoining} = this.state
        return (
            <div className='whole_22'>
                <div className='container pdddm'>
                    <div className='nnnm'>
                        <p className='step_1'>Step 2</p>
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={e => this.handleCheckBox(e)} value="Student"/>
                            <label className="form-check-label rad_txt" htmlFor="inlineRadio1">Student</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={e => this.handleCheckBox(e)} value="Employee"/>
                            <label className="form-check-label rad_txt" htmlFor="inlineRadio2">Employee</label>
                        </div>
                        <div className='common_field'>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>School Name <img src={star} alt='required field' className='requ_1' /></p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='schoolName'
                                            name='schoolName'
                                            className='inp_register'
                                            onChange = {this.handelChange}
                                            value={schoolName}
                                        />
                                        {/* <p className='error_reg' id='error_degree'>Required</p> */}
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>School Board <img src={star} alt='required field' className='requ_1' /></p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='scholl_board'
                                            className='inp_register'
                                            onChange = {this.handelChange}
                                            value={schoolBoard}
                                            name='schoolBoard'
                                        />
                                        {/* <p className='error_reg' id='error_degree'>Required</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>Degree <img src={star} alt='required field' className='requ_1' /></p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='degree'
                                            className='inp_register'
                                            onChange = {this.handelChange}
                                            value={degree}
                                            name='degree'
                                        />
                                        {/* <p className='error_reg' id='error_degree'>Required</p> */}
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>College Name </p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='clg_name'
                                            className='inp_register'
                                            onChange = {this.handelChange}
                                            value={colleageName}
                                            name='colleageName'
                                        />
                                        {/* <p className='error_reg' id='error_clg_name'>Required</p> */}
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
                                            onChange = {this.handelChange}
                                            value={MasterDegree}
                                            name='MasterDegree'
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
                                            onChange = {this.handelChange}
                                            value={colleageName2}
                                            name='colleageName2'
                                        />
                                        {/* <p className='error_reg' id='error_ms_name'>Required</p> */}
                                    </div>
                                </div>
                                
                            </div>
                            <div className='hrexp_1'>
                                <select className="custom-select emp_select" value={this.state.exp_H} onChange={this.handleExperience}>
                                    <option defaultValue='emp_h' className='emp_sel_txt' >Do you have any experience ?</option>
                                    <option defaultValue="yes" className='emp_sel_txt'  >Yes </option>
                                    <option defaultValue="no" className='emp_sel_txt' >No </option>
                                </select>
                            </div>
                            <button className='sub_btn_step' onClick={this.handleExp}>Submit</button>
                        </div>
                        <div className='employee_field' id='emp_ff'>
                            <div className='row'>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        <p className='field_names'>Designation </p>
                                        <input
                                            type='text'
                                            placeholder='Type here...'
                                            id='title_desg'
                                            className='inp_register'
                                            value={designation}
                                            onChange = {this.handelChange}
                                            name='designation'
                                        />
                                        {/* <p className='error_reg' id='error_title_desg'>Required</p> */}
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
                                            value={companyName}
                                            name='companyName'
                                            onChange = {this.handelChange}
                                        />
                                        {/* <p className='error_reg' id='error_comp_name'>Required</p> */}
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
                                            value={dateofJoining}
                                            name='dateofJoining'
                                            onChange = {this.handelChange}
                                        />
                                        {/* <p className='error_reg' id='error_doj'>Required</p> */}
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <div className='hr_11'>
                                        {/* <p className='field_names'>Internship If any</p>
                                        <input
                                            type='text'
                                            id='doj'
                                            className='inp_register'
                                            onChange={}
                                        />
                                        <p className='error_reg' id='error_doj'>Required</p> */}
                                        <p className='field_names'>Employment Type</p>
                                        <select className="custom-select emp_select" value={this.state.emp_Type} onChange={this.handleEmpType}>
                                            <option selected disabled defaultValue='emp_type' className='emp_sel_txt_1'>Employee Type</option>
                                            <option defaultValue="full_time " className='emp_sel_txt'>Full Time </option>
                                            <option defaultValue="part_time " className='emp_sel_txt'>Part Time </option>
                                            <option defaultValue="self_employed " className='emp_sel_txt'>Self Employed </option>
                                            <option defaultValue="freelance" className='emp_sel_txt'>Freelance </option>
                                            <option defaultValue="internship  " className='emp_sel_txt'>Internship </option>
                                            <option defaultValue="trainee  " className='emp_sel_txt'>Trainee </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button className='next_2btn' onClick={this.handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step2
