import React,{useState,useEffect} from 'react'
import './css/profile.css'
import HeaderUser from './HeaderUser'
import userIcon from './img/userIcon.svg'
import ProfileDetails from './ProfileDetails'
import SidebarProfile from './SidebarProfile'
import axios from 'axios'

function Profile() {

    const [postsOfUserss, setpostsOfUserss] = useState([])

    useEffect( ()=>{
        axios({
            method : 'post',
            url : 'http://localhost:3001/companyallHirePost',
            data: {
                // 'companyid' : companyId
            },
            headers : {
                AuthKey : 'asdfgh'
            }
        }) 
        .then(resp=>{
            console.log(resp)
            if(resp.data.status === 200){
                setpostsOfUserss(resp.data.data)
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

    const renderPostsOfUser = () =>{
        return postsOfUserss.map((user) => {
            return (
                <React.Fragment key={user.postID}>
                    <div className='post_boxM'>
                        <div className=' box_posttM'>
                            <p className = "box_posttSubH">Subject:<span className='something'> {user.subject} </span> </p>
                            <p  className = "box_posttSubH" >Message  </p>
                            <p className='msg_post'>
                            {user.content}
                            </p>
                            <br></br>
                        </div>   
                    </div>
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
                        <div className='col-lg-7 col-12'>
                            {/* renderPostsOfUser() */}
                        </div>
                        <div className='col-lg-1 col-0'></div>
                        <div className='col-lg-4 col-12 col_pdddd'>
                            <div className='reqq'>
                                <ProfileDetails/>
                            </div>
                        {/* <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-lg-3'></div>
                                <div className='col-lg-3'>
                                    <p>Number</p>
                                    <p className='connections_1'>Connections</p>
                                </div>
                                <div className='col-lg-3'>
                                    <p>Number</p>
                                    <p className='requetss_1'>Requests</p>
                                </div>
                                <div className='col-lg-3'></div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
                    
                </div>
                
                {/* profile about  */}
                <div className="container"  >
                 <div className = "row">
                     <div className = "col-lg-6">
                         
                     </div>
                 </div>

                </div>

            </div>
    )
}

export default Profile



