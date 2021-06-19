import React,{useState,useEffect} from 'react'
import './css/companyProfile.css'
import axios from 'axios'
import building from './img/companyBuilding.jpg'
import CompanySidebar from './CompanySidebar'
import CompanyNavbar from './CompanyNavbar'
import $ from 'jquery'

function CompanyProfile() {
    let textOfAbout, txtOfoveriew;

    const[companyData, setCompanyData] = useState([])
    const[overviewButton, getOverviewButton] = useState('Overview')
    const[aboutUs, getaboutUs] = useState('about')

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
                textOfAbout = resp.data.data[0].about
                txtOfoveriew = resp.data.data[0].overview
                document.getElementById('downtxt').innerHTML = txtOfoveriew
                renderABoutDes()

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

    const renderCompanyData = () =>{
        return companyData.map((data) =>{
            return (
                <React.Fragment key={data.companyId}>
                    <div className = "row">
                        <div className = "col-12 col-lg-3">
                            <img src = {building} alt ="building" className = "imgCP"></img>
                        </div>
                        <div className = "col-12 col-lg-9 detailCP">
                            <h1 >{data.name} </h1>
                            <br></br>
                            <h4> {data.email} </h4>
                            <br></br>
                            <h4>     <a href="#" className="btn btn-secondary">Visit Website</a></h4>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
    }

    // const overViewRender = () =>{
    //     return companyData.map((overview) =>{
    //         return(
    //             <React.Fragment key={overview.companyId}>
    //                 <div className="card text-center">
    //                     <div className="card-header bg-light text-info">
    //                     OverView
    //                     </div>
    //                     <div className="card-body cardCPW">
    //                         <p className="card-text">{overview.overview}</p>
    //                     </div>
    //                 </div>
    //             </React.Fragment>
    //         )
    //     })
    // }

    // const aboutRender = () =>{
    //     return companyData.map((about) =>{
    //         return(
    //             <React.Fragment key={about.companyId}>
    //                 <div className="card text-center">
    //                     <div className="card-header bg-light text-info">
    //                     About Us
    //                     </div>
    //                     <div className="card-body cardCPW">
    //                         <p className="card-text">{about.about}</p>
    //                     </div>
    //                 </div>
    //             </React.Fragment>
    //         )
    //     })
    // }

    const renderABoutDes = () =>{
        $('#abt_btn').on('click',function(){
            document.getElementById('upptxt').innerHTML = 'About Us'
            document.getElementById('downtxt').innerHTML = textOfAbout 
        })
        $('#overview_btn').on('click',function(){
            document.getElementById('upptxt').innerHTML = 'Overview'
            document.getElementById('downtxt').innerHTML = txtOfoveriew 
        })
    }


    return (
        <div>
            <div className='mainCP'>
            <CompanyNavbar></CompanyNavbar>
                <CompanySidebar/>
            <div className = "container completeCP">
                {renderCompanyData()}
            </div>
        
            {/* <hr></hr> */}
            <div className = "container">
               <div className = "row">
               
                   <div className = "col-6 col-lg-6 btnCPAlign">
                   <center>
                   <input type="button"  className="btn btn-info btnCP " id='overview_btn' value={overviewButton} onClick={e => {getOverviewButton(e.target.value)}} /> 
                   </center>
                   </div>
                   <div className = "col-6 col-lg-6">
                   <center>
                   <button type="button" className="btn btn-info btnCP" id='abt_btn' value={aboutUs} onClick={e => {getaboutUs(e.target.value)}} >About Us </button>
                   </center>
                </div>
                      
               </div>
           </div>
           <br></br>
           <div className = "container">
               <div className = "row">
              
                   <div className = "col-12 col-lg-12 cardCP">
                   <div className="card text-center">
                         <div className="card-header bg-light text-info">
                           <p id='upptxt'>OverView</p>
                         </div>
                         <div className="card-body cardCPW">
                             <p className="card-text" id='downtxt'></p>
                         </div>
                     </div>
                   </div>
                 
               </div>
            </div>
            
            </div>
        </div>
    )
}

export default CompanyProfile
