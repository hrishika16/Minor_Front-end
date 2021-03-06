import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CompanyNavbar from './CompanyNavbar'
import CompanySidebar from './CompanySidebar'
import userI from './img/userIcon.svg'

function CompanyPosts() {
    const [compPosts, setcompPosts] = useState([])
    const [reqqq, setreqqq] = useState([])

    useEffect( ()=>{
        const companyid = localStorage.getItem("companyid")
        axios({
            method : 'post',
            url : 'http://localhost:3001/mypost',
            data: {
                'id' : companyid
            },
            headers : {
                AuthKey : 'asdfgh'
            }
        }) 
        .then(resp=>{
            console.log(resp)
            if(resp.data.status === 200){
                setcompPosts(resp.data.data)
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
            setreqqq(resp.data.slice(0,7))
        })
        .catch(error =>{
            console.log('err',error)
        })
    },[])


    const renderPostsIncomapP =() =>{
        return compPosts.map((user) => {
            return (
                <React.Fragment key={user.postID}>
                    <div className='post_boxM'>
                          <div className='row '>
                                <div className='col-3 '>
                                    <img src={userI} alt='profile' className='post_ImgM' />
                                </div>
                                <div className='col-9 '>
                                    <p className='user_NameM'>{user.name}</p>
                                </div>
                            </div> 
                        <p className='something'> {user.subject} </p>
                           <p className='msg_post'>
                            {user.content}
                            </p>
                            <br></br>  
                    </div>
                </React.Fragment>
            )
        })
    }

    const renderRequestsCompPos = () =>{
        return reqqq.map((user) => {
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
            <CompanyNavbar></CompanyNavbar>
            <CompanySidebar></CompanySidebar>    
            <div className='main'>
                    
                    <div>
                        <div className='container'>
                            <br/>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='posts'>
                                        <p className='had_txt'>Posts</p>
                                        <center>
                                        {renderPostsIncomapP()}
                                    </center>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='reqq pos_ff'>
                                        <p className='had_txt'>Your Requests</p>
                                        {renderRequestsCompPos()}
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

export default CompanyPosts
