import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './css/userAbout.css'
import ProfileDetails from './ProfileDetails'
import SidebarProfile from './SidebarProfile'
import HeaderUser from './HeaderUser'
// let interestArr = []
function UserAbout() {

    const[expAbt, setexpAbt] = useState([])
    const[interestArr, setinterestArr] = useState()
    const user_id = localStorage.getItem('userId')

    useEffect( ()=>{
        axios({
            method : 'post',
            url : 'http://localhost:3001/fetchProfileinfo',
            data: {
                'id' : user_id
            },
            headers : {
            AuthKey : 'asdfgh '
            }
        }) 
        // setdataPost([res.data])
        .then(resp=>{
            
            if(resp.data.status === 200){
                // console.log(resp)
                setexpAbt([resp.data.data[0]])
                setinterestArr(resp.data.data[0].interests)
                console.log(resp.data.data[0].interests)
                console.log(interestArr)
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
        console.log(interestArr)
        return (
            <div>
              {interestArr.map((person, index) => (
                  
                <li key={index}>{person}</li>
              ))}
            </div>
          );
        // let skills
        // return (
        //     interestArr.map(person => (
        //         console.log(person)
        //     ))
        

          
        // );
        // for(let i=0;i<interestArr.length;i++){
        //     console.log(interestArr[i])
        //     // interestArr.map(skills =>{
        //     //     return(
        //     //             <li>{skills}</li>
        //     //     )
        //     // })
        // }
        // for (const income of interestArr) {
        //     console.log(income)
        // }
        //     return (interestArr.map(skills =>{
        //         console.log(skills)
        //         // return(
        //                 // <li>{skills}</li>
        //         // )
        //     }))
        // // }
    }

    const renderUserAbout = () =>{
        return expAbt.map(dataOfuser =>{
            return(
                <React.Fragment key={dataOfuser.userId}>
                    <h2 className='about_heading'>Experience</h2>
                    <ul className='border_ull'>
                        <li>
                            <p className='sub_heading'>Lorem Ipsum has been the industry's standard dum</p>
                            <p className='normal_para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                        </li>
                    </ul>
                    <br/>
                    <h2 className='about_heading'>Education</h2>
                    <ul className='border_ull' >
                        <li>
                            <p className='sub_heading'>Lorem Ipsum es simplemente</p>
                            <p className='normal_para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                        </li>
                    </ul>
                    <br/>
                    <h2 className='about_heading'>Skills</h2>
                    <ul>
                    {renderInterest()}
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
                        <div className='col-lg-7 col-12'>
                            <div className='about_prof'>
                                {renderUserAbout()}
                            </div>
                        </div>
                        <div className='col-lg-1 col-0'></div>
                        <div className='col-lg-4 col-12 '>
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
