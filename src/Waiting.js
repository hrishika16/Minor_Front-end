import React,{useState, useEffect} from 'react'
import waitImage from './img/waitImage.jpg'
import './css/waiting.css'
import { Redirect,useLocation  } from 'react-router'
import axios from 'axios'
import queryString from 'querystring'

function Waiting(props) {

    const[toRegister, setToRegister] = useState(false)

    // const Dashboard: React.FC = React.memo((props) => {
    //     const location = useLocation();
    
    //     console.log(queryString.parse(location.search));
    
    //     // {__firebase_request_key: "blablabla", _k: "v9ifuf"}
    
    
    //     return <p>Example</p>;
    // }

    // const location = useLocation();
    //     console.log(queryString.parse(location.search));

    useEffect( ()=> {

        const token = new URLSearchParams(props.location.search).get("parameter")
        console.log(token)
        const category = new URLSearchParams(props.location.search).get("category")
        console.log(category)
        
        axios({
            method : 'post',
            url : 'http://localhost:3001/verifyEmail',
            headers : {
                AuthKey : 'asdfgh'
            },
            data : {
                'token' : token,
                'category' : category
            }
        })
            .then(res=>{
                console.log(res)
                if(res.data.status === 200){
                    console.log(res.data.message)
                    setToRegister(true)
                    localStorage.setItem('emailOfUser' , res.data.data[0].email)
                    console.log(res.data.data[0].email)
                }
                else if(res.data.status === 202) {
                // console.log(res.data.message);
                console.log(" Please center with correct credentials")
                }
                else{
                    console.log("Some error occured")
                }
            })
            .catch(err=>{
                console.log(err)
            })
        
    },[])

    if(toRegister){
        return(
            <Redirect to= {{
                pathname : "/register" 
            }}
            />
        )
    }

    return (
        <div className="mainWaiting">
        <center>
        <h1 className="waitHeading">The Email has been send. </h1>
        <br></br>
            <img src ={waitImage}  alt = "Wait for some time " className="imgWaiting"></img>
            </center>
        </div>
    )
}

export default Waiting

