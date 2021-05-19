// import React,{useRef,useState,useEffect} from 'react'

import { event } from 'jquery'
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import './css/step3.css'
let test 
export class Step3 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            arra : [],
            Exploratory : 'Exploratory',
            Philosophy : 'Philosophy',
            BioTechnology : 'BioTechnology',
            Technology : 'Technology',
            Journalism : 'Journalism',
            Enterprenuralism : 'Enterprenuralism',
            Health_Sciences : 'Health Sciences'
        }
    }

    handleButtonClick = (event) =>{
        // this.setState({
        //     [event.target.name]: event.target.id,
        //     // arra: this.state.arra.concat(event.target.value)
        // })
        // console.log(event.target.id)
        const test2 = event.target.id
        // var join = this.state.arra.push(event.target.id)
        // this.setState({
        //     arra: this.state.arra.concat(event.target.value)
            // arra: [...this.state.arra, event.target.id]
        // })
        // test.push(this.state.arra)
        // test = this.state.arra
        // console.log(test)
        this.setState(previousState => ({
            arra: [...previousState.arra, test2]
        }));
        console.log(this.state.arra)
    }

    handleSubmitBtn(){
        const mail = localStorage.getItem('emailOfUser')
        // if(this.state.arra.length === null){
        //     console.log('Atleast select 1 field');
        // }
        // else{
            axios({
                method : 'post',
                url : 'http://localhost:3001/interests',
                headers : {
                    AuthKey : 'asdfgh'
                },
                data : {
                    'email' : mail,
                    'interests' : this.state.arra
                }
            }) 
            .then(res=>{
                console.log(res)
                if(res.data.status === 200){
                    console.log(res)
                    // this.handleCompChange()
                    // console.log(this.state.nextPage)
                    // // this.handleSomething()
                    // if(this.state.nextPage){
                        return(
                            <Redirect to= {{
                                pathname : "/dashboard" 
                            }}
                            />
                        )
                    // }
                }
                else if(res.data.status === 202) {
                console.log(res.data.message);
                }
                else{
                    console.log(res.data.message);
                }
            })
            .catch(err=>{
                console.log(err)
            })
        // }
    }
    

    render() {
        const {Exploratory, Philosophy,BioTechnology,Technology,Journalism,Enterprenuralism,Health_Sciences} = this.state
        return (
            <div >
            <center>
            <h2 className = "selectHeading">Select Your Interest</h2>
            <br></br>
        
            <div className = "container wholeInterest">
                <div className = "row">
                    <div className = "col-lg-3 btnInterest">
                        <input type='button' value ={Exploratory} name = 'Exploratory' id='Exploratory' onClick={this.handleButtonClick}/>
                        <br></br>
                        <input type='button'  value = "b1"  name = "b1" id='Exploratory' onClick={this.handleButtonClick}/>
                        <br></br>
                        <input type='button'  value ={Philosophy}  name = "Philosophy" id='Philosophy' onClick={this.handleButtonClick}/> 
                        <br></br>
                        <input type='button'  value ={BioTechnology}  name = "BioTechnology" id='BioTechnology' onClick={this.handleButtonClick}/>
                    </div>
                    <div className = "col-lg-3 btnInterest">
                        <input type='button'  value ={Technology}  name = "Technology" id='Technology' onClick={this.handleButtonClick}/>
                        <br></br>
                        <input type='button'  value ={Journalism}  name = "Journalism" id='Journalism' onClick={this.handleButtonClick}/> 
                        <br></br>
                        <input type='button'  value ={Enterprenuralism}  name = "Enterprenuralism" id='Enterprenuralism' onClick={this.handleButtonClick}/> 
                        <br></br>
                        <input type='button'  value ={Health_Sciences}  name = "Health_Sciences" id='Health_Sciences' onClick={this.handleButtonClick}/> 
                    </div>
                    <div className = "col-lg-3 btnInterest">
                        <button  value = "b1"  name = "b1"> Data Science </button>
                        <br></br>
                        <button  value = "b1"  name = "b1"> Behavioral Science  </button>
                        <br></br>
                        <button  value = "b1"  name = "b1">Marketing & Sales </button>
                        <br></br>
                        <button  value = "b1"  name = "b1">  Creative Writing</button>
                    </div>
                    <div className = "col-lg-3 btnInterest">
                        <button  value = "b1"  name = "b1"> Art & Culture  </button>
                        <br></br>
                        <button  value = "b1"  name = "b1">Public Service </button>
                        <br></br>
                        <button  value = "b1"  name = "b1">Design /Animation </button>
                        <br></br>
                        <button  value = "b1"  name = "b1"> Financial Analyst</button>
                    </div>
                </div>
                
            </div>
            
            <div className = "fieldDiv">
                <h4 className = "enterDetails">Enter any other Interest </h4>
                <br></br>
                <input type = "text" placeholder ="Type here..." className="fieldInput"></input>
                <button className = "add_btn_step3">+</button>
                <br></br>
                <button type = "btn" className = "submitBtnStep" onClick={this.handleSubmitBtn} >Submit</button>
                <br></br>
                <h4 className = "errorCategory error">Please select atleast 3 categories  </h4>
            </div>
            </center>   
        </div>
        )
    }
}

export default Step3

