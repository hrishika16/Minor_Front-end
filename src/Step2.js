import React, { useState } from 'react'
import './css/step2.css'
import star from './img/star.svg'
import $ from 'jquery'
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios'
let isChecked,isTest;

function Step2() {

    const [category, setcategory] = useState('')
    const [emp_Type, setemp_Type] = useState('emp_type')
    const [exp_H, setexp_H] = useState('exp_h')
    const [schoolName, setschoolName] = useState('')
    const [schoolBoard, setschoolBoard] = useState('')
    const [degree, setdegree] = useState('')
    const [colleageName, setcolleageName] = useState('')
    const [MasterDegree, setMasterDegree] = useState('')
    const [colleageName2, setcolleageName2] = useState('')
    const [designation, setdesignation] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [dateofJoining, setdateofJoining] = useState('')
    const [buttonValue, setbuttonValue] = useState(false)
    const [nextPage, setnextPage] = useState(false)

    const handleSubmit = () =>{
        const mail = localStorage.getItem('emailOfUser')
        axios({
            method : 'post',
            url : 'http://localhost:3001/page2',
            headers : {
                AuthKey : 'asdfgh'
            },
            data : {
                'category' : category,
                'schoolName' : schoolName,
                'schoolBoard' : schoolBoard,
                'degree' : degree,
                'colleageName' : colleageName,
                'MasterDegree' : MasterDegree,
                'colleageName2 ' : colleageName2,
                'designation' : designation,
                'companyName' : companyName,
                'dateofJoining' : dateofJoining,
                'jobType' : emp_Type,
                'email' : mail
            }
        }) 
        .then(res=>{
            
            if(res.data.status === 200){
                console.log(res)
                setnextPage(true)
                console.log(nextPage)
            }
            else if(res.data.status === 202) {
                console.log(res.data.message);
            }
            else{
                console.log(res.data.message);
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    if(nextPage){
        console.log('somewhere wihch is not right')
        return(
            <Redirect to='step3' />
        )
    }

    const handleExp= event =>{
                event.preventDefault()
                if(exp_H == 'Yes'){
                    document.getElementById('emp_ff').style.display = "block"
                    setbuttonValue(true)
                }
                else if(exp_H == 'No'){
                    document.getElementById('emp_ff').style.display = "none"
                    return(
                        <Redirect
                            to='/dashboard'
                        />
                    )
                }
            }

    const handleCheckBox = (e) =>{
        isChecked = e.target.value;
        setcategory(e.target.value)
        console.log(category);
    }

    return (
        <div className='whole_22'>
        <div className='container pdddm'>
            <div className='nnnm'>
                <p className='step_1'>Step 2</p>
                <div className="form-check form-check-inline ">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="inlineRadioOptions" 
                        id="inlineRadio1" 
                        onChange={e => handleCheckBox(e)} 
                        value="Student"/>
                    <label className="form-check-label rad_txt" htmlFor="inlineRadio1">Student</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="inlineRadioOptions" 
                        id="inlineRadio2" 
                        onChange={e => handleCheckBox(e)} value="Employee"/>
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
                                    onChange = { e => setschoolName(e.target.value)}
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
                                    onChange = { e => setschoolBoard(e.target.value)}
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
                                    onChange = { e => setdegree(e.target.value)}
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
                                    onChange = { e => setcolleageName(e.target.value)}
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
                                    onChange = { e => setMasterDegree(e.target.value)}
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
                                    onChange = { e => setcolleageName2(e.target.value)}
                                    value={colleageName2}
                                    name='colleageName2'
                                />
                                {/* <p className='error_reg' id='error_ms_name'>Required</p> */}
                            </div>
                        </div>
                        
                    </div>
                    <div className='hrexp_1'>
                        <select className="custom-select emp_select" value={exp_H} onChange = { e => setexp_H(e.target.value)}>
                            <option defaultValue='emp_h' className='emp_sel_txt' >Do you have any experience ?</option>
                            <option defaultValue="yes" className='emp_sel_txt'  >Yes </option>
                            <option defaultValue="no" className='emp_sel_txt' >No </option>
                        </select>
                    </div>
                    <button className='sub_btn_step' onClick={handleExp}>Submit</button>
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
                                    onChange = { e => setdesignation(e.target.value)}
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
                                    onChange = { e => setcompanyName(e.target.value)}
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
                                    onChange = { e => setdateofJoining(e.target.value)}
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
                                <select className="custom-select emp_select" value={emp_Type} onChange={e => setemp_Type(e.target.value)}>
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
                    <button className='next_2btn' onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Step2


// class Step2 extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             radioS : '',
//             emp_Type: 'emp_type',
//             exp_H : 'emp_h',
//             buttonValue : false,
//             nextPage : false ,
//             email : '',
//             category :'',
//             schoolName : '',
//             schoolBoard : '',
//             degree : '',
//             colleageName : '',
//             MasterDegree : '',
//             colleageName2 : '',
//             designation : '',
//             companyName : '',
//             dateofJoining :''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

    

//     handleCheckBox = (e) =>{
//         isChecked = e.target.value;
//         console.log(isChecked);
//         this.setState({
//             category : isChecked
//         })
//     }

//     handleEmpType = event =>{
//     this.setState({
//         emp_Type : event.target.value
//     })
//     }

//     handleExperience = event =>{
//     this.setState({
//         exp_H : event.currentTarget.value
//     })
    
//     }

//     handelChange = (event)=>{
//         this.setState({
//         [event.target.name]: event.target.value
//         })
        
//     }




//     handleExp= event =>{
//         event.preventDefault()
//         if(this.state.exp_H == 'Yes'){
//             document.getElementById('emp_ff').style.display = "block"
//             this.setState({buttonValue : true})
//             // console.log(this.state.buttonValue)
//         }
//         else if(this.state.exp_H == 'No'){
//             document.getElementById('emp_ff').style.display = "none"
//             return(
//                 <Redirect
//                     to='/dashboard'
//                 />
//             )
//         }
//     }

    
//     render() {
//         const {category,schoolName,schoolBoard,degree,colleageName,MasterDegree,colleageName2,designation,companyName,dateofJoining} = this.state
//         return (
           
//         )
//     }
// }

// export default Step2
