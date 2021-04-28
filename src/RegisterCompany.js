import React,{useState} from 'react'
import { Redirect } from 'react-router-dom'
import './css/registerU.css'
import star from './img/star.svg'
import axios from 'axios'

function RegisterCompany() {
    const[companyName, setCompanyName] = useState('')
    const[website, setWebsite] = useState('')
    const[addressC, setAddressC] = useState('')
    const[yoeReg, setYOEReg] = useState('')
    const[industryReg, setIndustryReg] = useState('')
    const[overviewReg, setOverviewReg] = useState('')
    const[companySize, setCompanySize] = useState('')
    const[companyType, setCompanyType] = useState('')
    const[contactNumber,setContactNumber] = useState('')
    const[alternateNumber,setAlternateNumber] = useState('')
    const[aboutwReg,setaboutwReg] = useState('')
    const[sendToProfileOfComp,sendsendToProfileOfComp] = useState(false)


    const firstDetailsReg =(event) =>{
        event.preventDefault()
        if(companyName === ''){
            document.querySelector('#error_compn').innerHTML = 'Company Name is Required'
            document.getElementById('error_compn').style.display = 'block'
        }
        if(aboutwReg === ''){
            document.querySelector('#error_aboutw').innerHTML = 'About is Required'
            document.getElementById('error_aboutw').style.display = 'block'
        }
        if(contactNumber === ''){
            document.querySelector('#error_contact').innerHTML = 'Contact Number is Required'
            document.getElementById('error_contact').style.display = 'block'
        }
        if(website === ''){
            document.querySelector('#error_web').innerHTML = 'Website url is Required'
            document.getElementById('error_web').style.display = 'block'
        }
        if(addressC === ''){
            document.querySelector('#error_address').innerHTML = 'Address is Required'
            document.getElementById('error_address').style.display = 'block'
        }
        if(yoeReg === ''){
            document.querySelector('#error_yoe').innerHTML = 'Year Of Establishment is Required'
            document.getElementById('error_yoe').style.display = 'block'
        }
        if(industryReg === ''){
            document.querySelector('#error_ind').innerHTML = 'Industry is Required'
            document.getElementById('error_ind').style.display = 'block'
        }
        if(companySize === ''){
            document.querySelector('#error_cmps').innerHTML = 'Company Size is Required'
            document.getElementById('error_cmps').style.display = 'block'
        }
        if(overviewReg === ''){
            document.querySelector('#error_overview').innerHTML = 'OverView is Required'
            document.getElementById('error_overview').style.display = 'block'
        }
        if(companyType === ''){
            document.querySelector('#error_ptype').innerHTML = 'Company Type is Required'
            document.getElementById('error_ptype').style.display = 'block'
        }
        else{
            const email = localStorage.getItem("emailC")
            console.log(companyName,website,addressC,yoeReg,industryReg,overviewReg,companySize,companyType,email,aboutwReg,contactNumber)
            axios({
                method : 'post',
                    url : `http://localhost:3001/comapnypage1`,
                    headers : {
                        AuthKey : 'asdfgh'
                    },
                    data : {
                        "name" : companyName ,
                        "website" : website,
                        "address" : addressC,
                        "estdYear" : yoeReg,
                        "industry" : industryReg,
                        "overview" : overviewReg,
                        "size" : companySize,
                        "companyType" : companyType,
                        "email" : email,
                        "about" : aboutwReg,
                        "contact" : contactNumber
                    }
            }) 
            .then(res=>{
                console.log(res)
                if(res.data.status === 200){
                    console.log(res.data.message)
                    sendsendToProfileOfComp(true)
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

    if(sendToProfileOfComp){
        return(
            <Redirect to= {{
                pathname : "/companyProfile" 
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
                                <p className='field_names'>Company Name <img src={star} alt='required field' className='requ_1' /> </p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='companyName'
                                    maxLength='30'
                                    className='inp_register'
                                    value={companyName}
                                    onChange={e => setCompanyName(e.target.value)}
                                />
                                <p className='error_reg' id='error_compn'></p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Website <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='website'
                                    maxLength='30'
                                    className='inp_register'
                                    value={website}
                                    onChange={e => setWebsite(e.target.value)}
                                />
                                <p className='error_reg' id='error_web'></p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                        <div className='hr_11'>
                                <p className='field_names'>Industry <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='text'
                                    placeholder='Type here...'
                                    id='industry'
                                    maxLength='20'
                                    className='inp_register'
                                    value={industryReg}
                                    onChange={e => setIndustryReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_ind'></p>
                            </div>
                            
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Date Of Establishment<img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='date'
                                    className='start_yr_inp'
                                    id='start_doe'
                                    value={yoeReg}
                                    onChange={e => setYOEReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_yoe'></p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                        <div className='hr_11'>

                        <p className='field_names'>Contact Number <img src={star} alt='required field' className='requ_1' /></p>
                        <input
                            type = "tel"
                            placeholder='Type here...'
                            maxLength='10'
                            id='contactNumber'
                            className='inp_register'
                            value={contactNumber}
                            onChange={e => setContactNumber(e.target.value)}
                        />
                        <p className='error_reg' id='error_contact'></p>
                        </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Alternate Number </p>
                                <input
                                 type = "tel"
                                    placeholder='Type here...'
                                    id='alternateNumber'
                                    maxLength='10'
                                    className='inp_register'
                                    value={alternateNumber}
                                    onChange={e => setAlternateNumber(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                            <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Company Size <img src={star} alt='required field' className='requ_1' /></p>
                                <input
                                    type='number'
                                    placeholder='Type here...'
                                    id='companySize'
                                    maxLength='10'
                                    className='inp_register'
                                    value={companySize}
                                    onChange={e => setCompanySize(e.target.value)}
                                />
                                <p className='error_reg' id='error_cmps'></p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Company Type <img src={star} alt='required field' className='requ_1' /></p>
                                <select className="custom-select inp_register" value={companyType}  onChange={e => setCompanyType(e.target.value)}>
                                    <option selected defaultValue="0">Company Type</option>
                                    <option defaultValue="1" >One Person Company (OPC) </option>
                                    <option defaultValue="2">Limited Liability Partnership (LLP)</option>
                                    <option defaultValue="3">Private Limited Company</option>
                                    <option defaultValue="4">Public Limited Company (PLC)</option>
                                </select>
                                <p className='error_reg' id='error_ptype'></p>
                            </div>
                        </div>
                    </div>
                    
                   
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                        <div className='hr_11'>

                        <p className='field_names'>Address <img src={star} alt='required field' className='requ_1' /></p>
                        <textarea
                            
                            placeholder='Type here...'
                            maxLength='50'
                            id='address'
                            className='inp_register'
                            value={addressC}
                            onChange={e => setAddressC(e.target.value)}
                        />
                        <p className='error_reg' id='error_address'></p>
                        </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='hr_11'>
                                <p className='field_names'>Overiew <img src={star} alt='required field' className='requ_1' /></p>
                                <textarea
                                 
                                    placeholder='Type here...'
                                    id='overviewReg'
                                    maxLength='50'
                                    className='inp_register'
                                    value={overviewReg}
                                    onChange={e => setOverviewReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_overview'></p>
                            </div>
                        </div>
                    </div>

                    <div className='hr_11'>
                                <p className='field_names'>About <img src={star} alt='required field' className='requ_1' /></p>
                                <textarea
                                 
                                    placeholder='Type here...'
                                    id='aboutwReg'
                                    maxLength='50'
                                    className='inp_register'
                                    value={aboutwReg}
                                    onChange={e => setaboutwReg(e.target.value)}
                                />
                                <p className='error_reg' id='error_aboutw'></p>
                            </div>

                   
                    <button  className='next_btn_1' onClick={firstDetailsReg}>Next</button>
                </div>
                </div>
            </div>
        )
}



export default RegisterCompany
