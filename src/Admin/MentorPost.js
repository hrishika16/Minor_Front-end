import React,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import userIcon from '../img/userIcon.svg'
import '../css/mentorPost.css'
import axios from 'axios'
import userI from '../img/userIcon.svg'
import MentorNavbar from './MentorNavbar'


function MentorPost() {

const[intialSubjectM, setSubject] = useState('')
const[intialMessageM,setMessage] = useState('')
const[dataPost, setdataPost] = useState([])
const mentor_id = localStorage.getItem('mentorid')
const mentorUsername = localStorage.getItem('mentorUsername')
useEffect( ()=>{
    
    axios({
        method : 'post',
        url : 'http://localhost:3001/allMentorPost',
        data: {
            'mentorid' : mentor_id,
            'action' : 'allPost'
          },
          headers : {
            AuthKey : 'asdfgh '
          }
    }) 
    // setdataPost([res.data])
    .then(resp=>{
        console.log(resp)
        if(resp.data.status === 200){
          //error occur 
          setdataPost([resp.data.data[0]])
          console.log(resp.data.message)
        }
        else if(resp.data.status === 202) {
          // console.log(res.data.message);
          console.log(" Please center with correct credentials")
        }
        else{
            console.log("Some error occured")
        }
      })
      .catch(error=>{
        console.log(error)
      })
},[])


const renderRequests =()=> {
    return dataPost.map((II) => {
        console.log(II.id)
        
        return (
            <React.Fragment key={II.mentorId}>
              <div className='post_boxM'>
                <div className='row someborder'>
                    <div className='col-3 '>
                        <img src={userIcon} alt='profile' className='post_ImgM' />
                    </div>
                    <div className='col-9'>
                        <p className='user_NameM'>{mentorUsername}</p>
                    </div>
                </div>
                <div className=' box_posttM'>
                    <p className = "box_posttSubH">Subject:<span className='something'> {II.subject} </span> </p>
                    <p  className = "box_posttSubH" >Message  </p>
                    <p className='msg_post'>
                    {II.message}
                    </p>
                    <br></br>
                </div>
                          
              </div>
          </React.Fragment>
        )
    })
}

const onAddClick = (e) =>{

    e.preventDefault()
    if(intialSubjectM === ''){
        document.querySelector('#subj_err').innerHTML = 'Subject is Required'
        document.getElementById('subj_err').style.display = 'block'
    }
    if(intialMessageM === ''){
        document.querySelector('#msg_err').innerHTML = 'Message is Required'
        document.getElementById('msg_err').style.display = 'block'
    }else{
        
            axios({
              method : 'post',
              url : 'http://localhost:3001/mentorPost',
              data: {
                'mentorid' : mentor_id,
                'subject' : intialSubjectM,
                'message' : intialMessageM
              },
              headers : {
                AuthKey : 'asdfgh '
              }
            })
            .then(resp=>{
              console.log(resp)
              if(resp.data.status === 200){
                //error occur 
                console.log(resp.data.message)
              }
              else if(resp.data.status === 202) {
                // console.log(res.data.message);
                console.log(" Please center with correct credentials")
              }
              else{
                  console.log("Some error occured")
              }
            })
            .catch(error=>{
              console.log(error)
            })
      }
}

    return (
        <div className='postM'>
         <MentorNavbar></MentorNavbar>
          <div className='container '>
            <div className = 'row rowMargin'>
              <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                <div className='post_boxM'>
                            <div className=' box_posttM'>
                            <div className='box_2'>
                            <p className="text-center login-txt">Add Post</p>
                            <div className="box1">
                                <p className="border_txt"> Subject</p>
                                <input type="text" id="user" maxLength="35" className="form-control inp_mm" value={intialSubjectM} onChange={e => setSubject(e.target.value)} placeholder="Type here..."/>
                                <p className='error' id='subj_err'></p>
                            </div>
                            </div>
                            <div className='box_3'>
                            <div className="box1">
                                <p className="border_txt"> Message</p>
                                <textarea type="text" id="user" maxLength="600" className="form-control inp_txtarea " value={intialMessageM} onChange={e => setMessage(e.target.value)} placeholder="Type here..."/>
                                <p className='error' id='msg_err'></p>
                            </div>
                            </div>
                            <center>
                            <button className='see_btn_dd' onClick={onAddClick}>ADD</button>
                            </center>
                            
                            {/* <div className="valSM">
                            <p  className = "box_posttSubD">{intialSubjectM}</p>
                            </div>
                            <p  className = "box_posttSubH" >Message </p>
                            <br></br>
                            <div className = "valM">
                            <p  className = "box_posttSubD">{intialMessageM}</p>
                            </div> */}
                            </div>
                          
                        </div>
                </div>
                

                <div className = 'col-lg-5 col-12'>
                  {renderRequests()}
                </div>
                <div className='col-lg-1'></div>
                </div>
            </div>
        </div>
    )
}

export default MentorPost
