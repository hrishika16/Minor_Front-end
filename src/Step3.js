
import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import './css/step3.css'
let test2 



// export class Step3 extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//             arra : [],
//             Exploratory : 'Exploratory',
//             Philosophy : 'Philosophy',
//             BioTechnology : 'BioTechnology',
//             Technology : 'Technology',
//             Journalism : 'Journalism',
//             Enterprenuralism : 'Enterprenuralism',
//             Health_Sciences : 'Health Sciences'
//         }
//     }

//     handleButtonClick = (event) =>{
//         // this.setState({
//         //     [event.target.name]: event.target.id,
//         //     // arra: this.state.arra.concat(event.target.value)
//         // })
//         // console.log(event.target.id)
//         test2 = event.target.value
//         console.log(test2)
//         // console.log(test2)
//         // var join = this.state.arra.push(event.target.id)
//         this.setState({
//             // arra: this.state.arra.concat(event.target.value)
//             // arra: [...this.state.arra, event.target.id]
//             arra : test2
//         })
//         // test.push(this.state.arra)
//         console.log(this.state.arra)
//         // test = this.state.arra
//         // console.log(test)
//         // this.handleTry(test2)
        
        
//     }

//     // handleTry(test){
//     //     console.log(test)
//     //     this.setState(previousState => ({
//     //         arra: [...previousState.arra, test]
//     //     }));
//     //     console.log(this.state.arra) 
//     // }

//     handleSubmitBtn(){
//         const mail = localStorage.getItem('emailOfUser')
//         // if(this.state.arra.length === null){
//         //     console.log('Atleast select 1 field');
//         // }
//         // else{
//             // axios({
//             //     method : 'post',
//             //     url : 'http://localhost:3001/interests',
//             //     headers : {
//             //         AuthKey : 'asdfgh'
//             //     },
//             //     data : {
//             //         'email' : mail,
//             //         'interests' : this.state.arra
//             //     }
//             // }) 
//             // .then(res=>{
//             //     console.log(res)
//             //     if(res.data.status === 200){
//             //         console.log(res)
//             //         // this.handleCompChange()
//             //         // console.log(this.state.nextPage)
//             //         // // this.handleSomething()
//             //         // if(this.state.nextPage){
//             //             return(
//             //                 <Redirect to= {{
//             //                     pathname : "/dashboard" 
//             //                 }}
//             //                 />
//             //             )
//             //         // }
//             //     }
//             //     else if(res.data.status === 202) {
//             //     console.log(res.data.message);
//             //     }
//             //     else{
//             //         console.log(res.data.message);
//             //     }
//             // })
//             // .catch(err=>{
//             //     console.log(err)
//             // })
//         // }
//     }
    

//     render() {
//         const {Exploratory, Philosophy,BioTechnology,Technology,Journalism,Enterprenuralism,Health_Sciences} = this.state
//         return (
//             <div >
               
//         </div>
//         )
//     }
// }

// export default Step3

