import React,{useEffect,useState} from 'react'
import axios from 'axios'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'
import './css/internship.css'
import company from './img/company.png'
import { Redirect } from 'react-router'

function Internship() {

    const [datafrHriing, setdatafrHriing] = useState([])
    const [statusOf, setstatusOf] = useState(false)


    useEffect( ()=>{
        const userId = localStorage.getItem('userId')
        axios({
            method : 'post',
            url : 'http://localhost:3001/allHiringPost',
            data: {
                'id' : userId
            },
            headers : {
                AuthKey : 'asdfgh'
            }
        }) 
        .then(resp=>{
            console.log(resp)
            if(resp.data.status === 200){
                setdatafrHriing(resp.data.data)
                console.log(resp.data)
            }
            else if(resp.data.status === 202) {
            console.log(resp.data.message);
            }
            else{
            console.log(resp.data.message);
            }
        })
        .catch(error=>{
        console.log(error)
        })

        
    },[])

    const mane = (test_1) =>{
        localStorage.setItem('rememberMe', test_1)
        console.log(test_1)
        setstatusOf(true)
    }

    if(statusOf) {
        return (
            <Redirect to= {{
                pathname : "/hirecompany" 
            }}
            />
        )
    }

    const renderColdata = () =>{
        return datafrHriing.map(user =>{
            return(
                <div className='post_div' key={user.postID} onClick={ () => mane(user.postID) } >
                    <div className='row'>
                        <div className='col-3'>
                            <img src={company} alt='company logo' className='company_img' />
                        </div>
                        <div className='col-9'>
                            <p className='company_name'>{user.name}</p>
                            <p className='place_name' >{user.email}</p>
                            <p className='inner_txt'>{user.role}</p>
                            <p className='inner_txt'>
                                {user.description}
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='contt'>
            <HeaderUser/>
            <Sidebar/>
            <div className='main'>
                <div className='container argin_in'>
                    <center>
                    {/* <div className='row'> */}
                        {/* <div className='col-lg-7 col-12'> */}
                            {renderColdata()}
                        {/* </div> */}
                        {/* <div className='col-lg-5 col-12'>
                            <div className='post_div_1'>
                                <p className='company_name'>Company Name </p>
                                <p className='place_name' >Place, something</p>
                                <p className='inner_txt'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div> */}
                    {/* </div> */}
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Internship
