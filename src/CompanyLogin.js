import React,{useState} from 'react'
import axios from 'axios'

function CompanyLogin() {
    const[username , setUsername] = useState('')
    const[password , setPassword] = useState('')
    const [login,setLogin] = useState(false)

    const SubmitHandler = (e) => {
        e.preventDefault()
      
        if(username === ''){
            document.querySelector('#userErr').innerHTML = 'Email is Required';
            document.getElementById('error_1').style.display = 'block';
            document.querySelector('#user-name').focus()
        }
        if(password === ''){
        document.querySelector('#passErr').innerHTML = 'Password is Required';
        document.getElementById('error_2').style.display = 'block';
        document.querySelector('#password').focus()
        }
       
        else {
            
                axios({
                //     method : 'post',
                //     url : 'http://localhost:3001/signupdata',
                //     headers : {
                //         AuthKey : 'asdfgh '
                //     },
                //     data : {
                //         email : username,
                //         password : password,
                //         // category : 
                //     }
                }) 
                .then(res=>{
                    console.log(res)
                    if(res.data.message === 201){
                        setLogin(true)
                        //  localStorage.setItem('login' , res.data.jwt)
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

    if(login) {
        
        // ll = localStorage.getItem('login')
        // return (
        //     <Redirect to= {{
        //         pathname : "/dashboard" 
        //     }}
        //     />
        // )
    }
    return (
        <div>
            <div className='ro'>
            <div className='row'>
                <div className='col-lg-5 col-12'>
                    {/* <img src={img1} alt='Login image 1' className='img1' /> */}
                </div>
                <div className='col-lg-7 col-12'>
                    
                    <div className='spaceee'>
                    <h2 className='sign'>Sign Up</h2>
                    <div className='hgt1'>
                        <p className='lbl_txt'> Username</p>
                        <input 
                        type="text" 
                        className="form-control inp_login" 
                        placeholder='Type here...'
                        id='user-name' 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)}/>
                        <p className='error' id='userErr' ></p>   
                    </div>
                     <div className='hgt1'>
                        <p className='lbl_txt'>Password</p>
                        <input 
                            type="password"
                            placeholder='Type here...'
                            className ="form-control inp_login"
                            id='password' 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)}/>   
                        <p className='error' id='passErr'></p>  
                     </div>
                       
                    <button className="btn_submit" onClick={SubmitHandler}>Login</button>
                    {/* <div>
                        or
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
        </div>
    )
}

export default CompanyLogin
