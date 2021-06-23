import React,{useState,useEffect} from 'react'
import HeaderUser from './HeaderUser'
import userIcon from './img/userIcon.svg'
import ProfileDetails from './ProfileDetails'
import SidebarProfile from './SidebarProfile'
import axios from 'axios'
import nodata from './img/nodata.png'

function ProfileStory() {

    const[post, setPost] = useState([])
    const user_id = localStorage.getItem('userId')
    const [status, setstatus] = useState(false)

    useEffect( ()=>{
        axios({
            method : 'post',
            url : 'http://localhost:3001/mySuccessPost',
            data: {
                'id' : user_id
            },
            headers : {
            AuthKey : 'asdfgh'
            }
        }) 
        // setdataPost([res.data])
        .then(resp=>{
            console.log(resp)
            if(resp.data.status === 200){
                setstatus(true)
                setPost([resp.data.data[0]])
                console.log(resp.data.message)
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

    const showNOdataFoundImg = () =>{
        return(
            <div>
                 <p className='nodata_txt'>Oops No data Found</p>
                <center> <img src={nodata} alt='no data found' className='nodata_inmg' /> </center>
            </div>
        )
    }

    const renderPostsInProfile = () =>{
        return post.map(postI =>{
            return(
                <React.Fragment key={postI.userId}>
                    <div className='post_boxM'>
                        <div className=''>
                            <div className='row '>
                                <div className='col-3 '>
                                    <img src={userIcon} alt='profile' className='post_ImgM' />
                                </div>
                                <div className='col-9'>
                                    <p className='user_NameM'>{postI.name}</p>
                                </div>
                            </div>
                            <div className=' box_posttM'>
                                {/* <p className = "box_posttSubH">Subject:<span className='something'> {postI.subject} </span> </p> */}
                                
                                <p className='msg_post'>
                                {postI.content}
                                </p>
                                <br></br>
                            </div> 
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
                        { status ? renderPostsInProfile() : showNOdataFoundImg()}
                        </div>
                        <div className='col-lg-1 col-0'></div>
                        <div className='col-lg-4 col-12'>
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

export default ProfileStory
