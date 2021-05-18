import React,{useRef,useState} from 'react'
import './css/step3.css'

function Step3() {

    const refr = useRef(null)
    const [exp, setExp] = useState('Exploratory')

    return (
        <div >
        <center>
            <h2 className = "selectHeading">Select Your Interest</h2>
            <br></br>
        
            <div className = "container wholeInterest">
                <div className = "row">
                    <div className = "col-lg-3 btnInterest">
                        <input  value ={exp} ref={refr} name = 'Exploratory' onClick={e => {setExp(e.target.value)}}/>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">Literature </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">Philosophy  </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">BioTechnology</button>
                    </div>
                    <div className = "col-lg-3 btnInterest">
                        <button  value = "b1" ref={refr} name = "b1">Technology  </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">  Journalism</button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">Enterprenuralism </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1"> Health Sciences</button>
                    </div>
                    <div className = "col-lg-3 btnInterest">
                        <button  value = "b1" ref={refr} name = "b1"> Data Science </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1"> Behavioral Science  </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">Marketing & Sales </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">  Creative Writing</button>
                    </div>
                    <div className = "col-lg-3 btnInterest">
                        <button  value = "b1" ref={refr} name = "b1"> Art & Culture  </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">Public Service </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1">Design /Animation </button>
                        <br></br>
                        <button  value = "b1" ref={refr} name = "b1"> Financial Analyst</button>
                    </div>
                </div>
                
            </div>
            
            <div className = "fieldDiv">
                <h4 className = "enterDetails">Enter any other Interest </h4>
                <br></br>
                <input type = "text" placeholder ="Type here..." className="fieldInput"></input>
                <button className = "add_btn_step3">+</button>
                <br></br>
                <button type = "btn" className = "submitBtnStep" >Submit</button>
                <br></br>
                <h4 className = "errorCategory error">Please select atleast 3 categories  </h4>
                </div>
            </center>   
        </div>
    )
}

export default Step3
