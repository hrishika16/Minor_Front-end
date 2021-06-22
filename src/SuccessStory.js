import React,{useEffect,useState} from 'react'
import HeaderUser from './HeaderUser'
import Sidebar from './Sidebar'
import axios from 'axios'
import userI from './img/userIcon.svg'
import userIcon from './img/userIcon.svg'

function SuccessStory() {

    const [reeqq, setreeqq] = useState([])
    const [successStory, setsuccessStory] = useState([])
    

    useEffect( ()=>{
        const userId = localStorage.getItem('userId')
        axios({
            method : 'post',
            url : 'http://localhost:3001/allSuccessPost',
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
                
                setsuccessStory(resp.data.data)
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

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            console.log(resp.data)
            setreeqq(resp.data.slice(0,7))
        })
        .catch(error =>{
            console.log('err',error)
        })
    },[])

    const renderPostsInUserAllSuccessStory =() =>{
        return successStory.map((user) => {
            return (
                <React.Fragment key={user.userID}>
                    <div className='post_boxM'>
                        <div className='someborder'>
                            <div className='row '>
                                <div className='col-3 '>
                                    <img src={userIcon} alt='profile' className='post_ImgM' />
                                </div>
                                <div className='col-9'>
                                    <p className='user_NameM'>{user.name}</p>
                                </div>
                            </div>
                            <div className=' box_posttM'>
                                <p className = "box_posttSubH">Subject:<span className='something'> {user.subject} </span> </p>
                                <p  className = "box_posttSubH" >Message  </p>
                                <p className='msg_post'>
                                {user.content}
                                </p>
                                <br></br>
                            </div> 
                        </div>    
                    </div>
                </React.Fragment>
            )
        })
    }

    

    const renderRequestsS =() =>{
        return reeqq.map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <div className='box_11'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <img src={userI} alt='user Icon' className='user_rr' />
                            </div>
                            <div className='col-lg-9 padr_dd'>
                                <p className='userName'>{user.username}</p>
                                <p className='profeSS'>{user.email}</p>
                            </div>
                        </div>
                    </div>    
                </React.Fragment>
            )
        })
    }
    return (
        <div className='contt'>
            <HeaderUser/>
            <Sidebar/>
                <div className='main'>
                    
                    <div>
                        <div className='container'>
                            <br/>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='posts'>
                                        <p className='had_txt'>Posts</p>
                                        <center>
                                        {renderPostsInUserAllSuccessStory()}
                                        {/* <button className='see_btn_dd' onClick={LoadMoreS}>Load More</button> */}
                                    </center>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='reqq pos_ff'>
                                        <p className='had_txt'>Your Requests</p>
                                        {renderRequestsS()}
                                        <center><button className='see_btn_dd'>See More</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SuccessStory
