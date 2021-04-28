import React,{useState,useEffect} from 'react'
import Header from './Admin/Header'
import HeaderUser from './HeaderUser'
import userIcon from './img/userIcon.svg'
import './css/companyProfile.css'
import axios from 'axios'
import building from './img/companyBuilding.jpg'

function CompanyProfile() {

    const[companyData, setCompanyData] = useState([])

    useEffect( ()=>{
        const companyid = localStorage.getItem("companyid")
        axios({
            method : 'post',
            url : 'http://localhost:3001/companyProfile',
            data: {
                'companyid' : companyid
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
              setCompanyData([resp.data.data[0]])
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

    return (
        <div>
           <div className='mainCP'>
                <div className='sidebardCP'> 
                    {/* User icon */}
                    <div>
                        <center>
                            <img src={userIcon} alt='user Icon' className='userImg' />
                        </center>
                    </div>
                    <br/>
                    <br></br>
                    <div className='sidess_11'>
                        <button className='linkss_11'>Profile</button>
                    </div>
                   
                <div className='sidess_11'>
                        <button className='linkss_11'>Jobs/InternShip</button>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11'>Mentor Post </button>
                    </div>
                    <div className='sidess_11'>
                        <button className='linkss_11'>Your Post</button>
                    </div>
                </div>
            </div>
            <div className = "container completeCP">
              <div className = "row">
              
               <div className = "col-12 col-lg-3">
                   <img src = {building} alt ="building" className = "imgCP"></img>
               </div>
               <div className = "col-12 col-lg-9 detailCP">
               <h1 >Company Name </h1>
               <br></br>
               <h4> Email Company </h4>
               <br></br>
               <h4>     <a href="#" class="btn btn-secondary">Visit Website</a></h4>
                </div>
                
                
              </div>

            </div>
        
            <hr></hr>
            <br></br>
            <div className = "container">
               <div className = "row">
               
                   <div className = "col-6 col-lg-6 btnCPAlign">
                   <center>
                   <button type="button" class="btn btn-info btnCP ">OverView </button>
                   </center>
                   </div>
                   <div className = "col-6 col-lg-6">
                   <center>
                   <button type="button" class="btn btn-info btnCP">About Us </button>
                   </center>
                </div>
                      
               </div>
           </div>
           <br></br>
           <div className = "container">
               <div className = "row">
              
                   <div className = "col-12 col-lg-12 cardCP"
                   >
                  <div class="card text-center">
                    <div class="card-header bg-light text-info">
                     OverView
                    </div>
                    <div class="card-body cardCPW">
                        
                        <p class="card-text">W additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional contenWith supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional contenWith supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional conten low as a natural lead-in to additional conten low as a natural lead-in to additional conten</p>
                   
                    </div>
                  
                    </div>
                   </div>
                 
               </div>
           </div>

        </div>
    )
}

export default CompanyProfile
