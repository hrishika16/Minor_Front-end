import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './css/userAbout.css'
import ProfileDetails from './ProfileDetails'
import SidebarProfile from './SidebarProfile'
import HeaderUser from './HeaderUser'
function UserAbout() {

    const[expAbt, setexpAbt] = useState([])
    const[interestArr, setinterestArr] = useState([])
    const user_id = localStorage.getItem('userId')

    useEffect( ()=>{
        axios({
            method : 'post',
            url : 'http://localhost:3001/fetchProfileinfo',
            data: {
                'id' : user_id
            },
            headers : {
            AuthKey : 'asdfgh'
            }
        }) 
        .then(resp=>{
            
            if(resp.data.status === 200){
                console.log(resp)
                setexpAbt([resp.data.data[0]])
                setinterestArr(resp.data.data[0].interests)
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

    const renderInterest = () =>{
        return (
            <div>
                {interestArr.map((person, index) => (
                    <li className='normal_para' key={index}>{person}</li>
                ))}
            </div>
        );
    }

    const renderUserAbout = () =>{
        return expAbt.map(dataOfuser =>{
            return(
                <React.Fragment key={dataOfuser.userID}>
                    <h2 className='about_heading'>Experience</h2>
                    <ul className='border_ull'>
                        <li>
                            {
                                dataOfuser.dateofJoining ?
                                    <div>
                                    <p className='sub_heading'>{dataOfuser.companyName}</p>
                                    <p className='normal_para'>{dataOfuser.designation}</p>
                                    <p className='normal_para'>{dataOfuser.dateofJoining} &nbsp; {dataOfuser.jobType}  </p> 
                                    </div> 
                                    : 
                                    <p className='normal_para'>You Have not added any Experience</p>
                                }
                            
                        </li>
                    </ul>
                    <br/>
                    <h2 className='about_heading'>Education</h2>
                    <ul className='border_ull' >
                        <li>
                        {/* gfhf */}
                            <p className='normal_para'>
                            {dataOfuser.schoolName}
                            </p>
                        </li>
                        <li>
                            <p className='normal_para'>
                            {dataOfuser.colleageName}
                            </p>
                        </li>
                    </ul>
                    <br/>
                    <h2 className='about_heading'>Skills</h2>
                    <ul>
                    {renderInterest()}
                        {/* {interestArr.map((person, index) => (
                            <li key={index}>{person}</li>
                        ))} */}
                    </ul>
                    
                </React.Fragment> 
            )
        })
    }

    return (
        <div className='whole_27'>
            <HeaderUser/>
            <SidebarProfile/>
            <div className='main_prof mm_11'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-12'>
                            <div className='about_prof'>
                                {renderUserAbout()}
                            </div>
                        </div>
                        <div className='col-lg-1 col-1'></div>
                        <div className='col-lg-4 col-md-5 col-12 col_pdddd'>
                            <div className='reqq'>
                                <ProfileDetails/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAbout
