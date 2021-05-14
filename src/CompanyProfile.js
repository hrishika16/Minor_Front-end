import React,{useState,useEffect} from 'react'
import './css/companyProfile.css'
import axios from 'axios'
import building from './img/companyBuilding.jpg'
import CompanySidebar from './CompanySidebar'

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

    return (
        <div>
            <div className='mainCP'>
                <CompanySidebar/>
            <div className = "container completeCP">
                {renderCompanyData()}
            </div>
        
            <hr></hr>
            <br></br>
            <div className = "container">
               <div className = "row">
               
                   <div className = "col-6 col-lg-6 btnCPAlign">
                   <center>
                   <button type="button" className="btn btn-info btnCP ">OverView </button>
                   </center>
                   </div>
                   <div className = "col-6 col-lg-6">
                   <center>
                   <button type="button" className="btn btn-info btnCP">About Us </button>
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
                     OverView
                    </div>
                    <div className="card-body cardCPW">
                        
                        <p className="card-text">W additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional contenWith supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional contenWith supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional conten low as a natural lead-in to additional conten low as a natural lead-in to additional conten</p>
                   
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
