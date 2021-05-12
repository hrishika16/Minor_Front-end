import React from 'react'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'
import './css/internship.css'
import company from './img/company.png'

function Internship() {

    const renderColdata = () =>{
        
    }

    return (
        <div className='contt'>
            <HeaderUser/>
            <Sidebar/>
            <div className='main'>
                <div className='container argin_in'>
                    <div className='row'>
                        <div className='col-lg-7 col-12'>
                            <div className='post_div'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img src={company} alt='company logo' className='company_img' />
                                    </div>
                                    <div className='col-9'>
                                        <p className='company_name'>Company Name </p>
                                        <p className='place_name' >Place, something</p>
                                        <p className='inner_txt'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-12'>
                            <div className='post_div_1'>
                                <p className='company_name'>Company Name </p>
                                <p className='place_name' >Place, something</p>
                                <p className='inner_txt'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internship
