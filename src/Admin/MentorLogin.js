import React,{useState} from 'react'
import axios from 'axios'

function MentorLogin() {

    const[username , setUsername] = useState('')
    const[password , setPassword] = useState('')
    const [login,setLogin] = useState(false)

    const SubmitHandler = (e) => {
        e.preventDefault()
    
        if(username === ''){
          
            document.getElementById('usernameErr').style.display = 'block';
        
        }
        if(password === ''){
      
        document.getElementById('passwordErr').style.display = 'block';
     
        }
       
        else {
            
                axios({
                    method : 'post',
                //     url : 
                    headers : {
                        AuthKey : 'asdfgh '
                    },
                    data : {
                        email : username,
                        password : password,
                      
                    }
                }) 
                .then(res=>{
                    console.log(res)
                    if(res.data.message === 201){
                       
                       
                        console.log(res)
                    }
                    else {
                        console.log(res.data.message);
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }

   
    return (
        <div>
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-12 col-lg-6">

                    </div>
                    <div className = "col-12 col-lg-6">
                 
                    <h2 >Login</h2>
                    <div >
                        <p > Username</p>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder='Username'
                        id='user-name' 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)}/>
                        <p className='error' id='usernameErr' ></p>   
                    </div>
                     <div >
                        <p >Password</p>
                        <input 
                            type="password"
                            placeholder='Type here...'
                            className ="form-control inp_login"
                            id='password' 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)}/>   
                        <p className='error' id='passwordErr'></p>  
                     </div>
                       
                    <button className="btn_submit" onClick={SubmitHandler}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorLogin
