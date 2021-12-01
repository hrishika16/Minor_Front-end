import React,{useState,useEffect} from 'react'
import userIcon from './img/userIcon.svg'
import axios from 'axios'

function ProfileDetails() {
    const[user_Name , setName] = useState('')
    const[user_bio , setBio] = useState('')
    const[nameDetail, setnameDetail] = useState([])
    const[user_desp , setDesp] = useState('')
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
                setnameDetail([resp.data.data[0]])
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


    const renderUserprofile = () =>{
        return nameDetail.map(user=>{
            return(
                <div className='row ' key={user.token}>
                    <div className='col-lg-4 col-4'>
                        <img src={userIcon} alt='user Icon' />
                    </div>
                    <div className='col-lg-8 col-8 col_left_pdn'>
                        <p className='user--name'>{user.first_name}  {user.last_name} </p>
                        <p className='name'>{user.email} </p>
                        <p className='name'>{user.city} , {user.state}</p>
                        {/* <button className='add_bio_btn'> ADD BIO </button> */}
                        <br/>
                        {/* <textarea className='summary_bx' placeholder='Add summary '></textarea> */}
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            {/* <div className='row'> 
                <div className='col-12'> 
                    <button className='edit_btn_p' data-toggle="modal" data-target="#EditProfileModal">Edit profile</button>
                </div>
            </div> */}
            {renderUserprofile()}
            {/* Edit Modal */}
            <div className="modal fade" id="EditProfileModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <center> */}
                            <img src={userIcon} alt='user Icon' className='userImg1' />
                            
                                <p className='profile_md'>NAME</p>
                                <input
                                     type='text'
                                    className='inp_prof'
                                    id='username'
                                    maxLength='50'
                                    value={user_Name} 
                                    onChange={e=>setName(e.target.value)}
                                />
                                <p className='profile_md'>BIO</p>
                                <input
                                     type='text'
                                    className='inp_prof'
                                    id='user_bio'
                                    maxLength='50'
                                    value={user_bio} 
                                    onChange={e=>setBio(e.target.value)}
                                />
                                <p className='profile_md'>DESCRIPTION</p>
                                <textarea
                                     type='text'
                                    className='inp_prof'
                                    id='username'
                                    value={user_desp} 
                                    onChange={e=>setDesp(e.target.value)}
                                />
                                <button className ='btn edit_btn_p' data-dismiss="modal" >&nbsp;Edit &nbsp;</button>
                            {/* </center> */}
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProfileDetails
