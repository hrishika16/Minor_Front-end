import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import './css/registerU.css'
import star from './img/star.svg'
import axios from 'axios'


function RegisterU(props) {
    const[firstNameReg, setFirstNameReg] = useState('')
    const[lastNameReg, setLastNameReg] = useState('')
    const[contactNumReg, setContactNumReg] = useState('')
    const[dobReg, setDobReg] = useState('')
    const[stateReg, setStateReg] = useState('')
    const[cityReg, setCityReg] = useState('')
    const[genderReg, setGenderReg] = useState('')
    const[pinReg, setPinReg] = useState('')
    const[sendTo2,sendToStep2] = useState(false)

    const firstDetailsReg =(event) =>{
        event.preventDefault()
        if(firstNameReg === ''){
            document.querySelector('#error_fn').innerHTML = 'First Name is Required'
            document.getElementById('error_fn').style.display = 'block'
        }
        if(lastNameReg === ''){
            document.querySelector('#error_ln').innerHTML = 'Last Name is Required'
            document.getElementById('error_ln').style.display = 'block'
        }
        if(contactNumReg === ''){
            document.querySelector('#error_cont').innerHTML = 'Contact Number is Required'
            document.getElementById('error_cont').style.display = 'block'
        }
        if(dobReg === ''){
            document.querySelector('#error_dob').innerHTML = 'DOB is Required'
            document.getElementById('error_dob').style.display = 'block'
        }
        if(stateReg === ''){
            document.querySelector('#error_state').innerHTML = 'State is Required'
            document.getElementById('error_state').style.display = 'block'
        }
        if(genderReg === ''){
            document.querySelector('#error_gender').innerHTML = 'Gender is Required'
            document.getElementById('error_gender').style.display = 'block'
        }
        if(cityReg === ''){
            document.querySelector('#error_city').innerHTML = 'City is Required'
            document.getElementById('error_city').style.display = 'block'
        }
        if(pinReg === ''){
            document.querySelector('#error_pc').innerHTML = 'Preferential City is Required'
            document.getElementById('error_pc').style.display = 'block'
        }
        else{
            const email = localStorage.getItem("email")
            
            axios({
                method : 'post',
                    url : `http://localhost:3001/page1`,
                    headers : {
                        AuthKey : 'asdfgh'
                    },
                    data : {
                        "first_name" : firstNameReg ,
                        "last_name" : lastNameReg,
                        "contact" : contactNumReg,
                        "dob" : dobReg,
                        "state" : stateReg,
                        "city" : cityReg,
                        "gender" : genderReg,
                        "prefCity" : pinReg,
                        "email" : email
                    }
            }) 
            .then(res=>{
                console.log(res)
                if(res.data.status === 200){
                    console.log(res.data.message)
                    sendToStep2(true)
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
    }

    if(sendTo2){
        return(
            <Redirect to= {{
                pathname : "/page2" 
            }}
            />
        )
    }

        return (
            <div className='whole_12'>
                <div className='container pddd'>
                    <div className='nnn'>
                    <p className='step_1'>Step 1</p>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>First Name <img src={star} alt='required field' className='requ_1' /> </p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='firstName'
                                    maxLength='30'
                                    className='inp_register'
                                    value={firstNameReg}
                                    onChange={e => setFirstNameReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_fn'></p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Last Name <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='lastName'
                                    maxLength='30'
                                    className='inp_register'
                                    value={lastNameReg}
                                    onChange={e => setLastNameReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_ln'></p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Contact Number <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='tel'
                                    placeholder='Type here...'
                                    maxLength='10'
                                    id='contactNo'
                                    className='inp_register'
                                    value={contactNumReg}
                                    onChange={e => setContactNumReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_cont'></p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>DOB <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='date'
                                    className='start_yr_inp'
                                    id='start_y'
                                    value={dobReg}
                                    onChange={e => setDobReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_dob'></p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <div className='col-lg-6 col-12'></div>
                        <div className='col-lg-6 col-12'></div>
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
                            </div> */}
                   
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>State <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='contactNo'
                                    maxLength='20'
                                    className='inp_register'
                                    value={stateReg}
                                    onChange={e => setStateReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_state'></p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>City <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='contactNo'
                                    maxLength='20'
                                    className='inp_register'
                                    value={cityReg}
                                    onChange={e => setCityReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_city'></p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Gender <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='contactNo'
                                    maxLength='20'
                                    className='inp_register'
                                    value={genderReg}
                                    onChange={e => setGenderReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_gender'></p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Preferential City <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='contactNo'
                                    maxLength='6'
                                    className='inp_register'
                                    value={pinReg}
                                    onChange={e => setPinReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_pc'></p>
                            </div>
                        </div>
                    </div>
                    
                    <button  className='next_btn_1' onClick={firstDetailsReg}>Next</button>
                </div>
                </div>
            </div>
        )
    }

export default RegisterU
