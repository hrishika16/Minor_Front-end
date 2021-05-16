import React, { Component } from 'react'
import axios from 'axios'
import Header from "./Header";
import '../css/mentor.css'
import ReactPaginate from 'react-paginate'
import '../css/Paginate.css'
import $, { event } from 'jquery'
let selectedPage;


class Mentor extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users : [],
            offset : 0,
            data : [],
            perPage : 9 ,
            currentPage : 1,
            totalPages : 0,
            username_Mentor : '',
            email_Mentor : '',
            dob_Mentor : '',
            password_Mentor : '',
            qualification_Mentor : '',
            contactNumber_Mentor : '',
            totalPosts_Mentor : 0 
        };

    }

    handelChange = (event)=>{
        this.setState({
        [event.target.name]: event.target.value
        })
    
    }

    handelChangeDob = e =>{
    this.setState({
    dob_Mentor : e.target.value
    })
    }

    handelSubmit = (event)=>{
    const { username_Mentor, email_Mentor, dob_Mentor, qualification_Mentor, contactNumber_Mentor,totalPosts_Mentor,password_Mentor } = this.state
    event.preventDefault()
    if(username_Mentor === ''){

        document.getElementById('nameErrM').style.display = 'block'
    }
    if(email_Mentor === ''){

        document.getElementById('emailErrM').style.display = 'block'
    }
    if(dob_Mentor === ''){

        document.getElementById('dobErrM').style.display = 'block'
    }
    if(qualification_Mentor === ''){

        document.getElementById('qualiErrM').style.display = 'block'
    }
    if(contactNumber_Mentor === ''){

        document.getElementById('contactErrM').style.display = 'block'
    }
    if(password_Mentor === ''){

        document.getElementById('pswdErrM').style.display = 'block'
    }
    
    
    else {
        // $("#btnSubmit").on("click",function() {
            window.$( "#AddModal" ).modal('hide');
        //   });
        axios({
            method : 'post',
            url : `http://localhost:3001/mentorSignup`,
            headers : {
                AuthKey : 'asdfgh'
            },
            data : {
                username : username_Mentor,
                email : email_Mentor,
                password : password_Mentor ,
                contact : contactNumber_Mentor,
                dob : dob_Mentor,
                qualification : qualification_Mentor
            }
            
        })
        .then(resp =>{
            console.log(resp.data)
                if(resp.data.status === 200){
                    window.$("#btnSubmit").click(function() {
                        console.log("work hua ")
                        $( "#AddModal" ).hide();
                    });
                    console.log(resp.data.message)
                    // sendToStep2(true)
                }
                else if(resp.data.status === 202) {
                // console.log(res.data.message);
                console.log(" Please center with correct credentials")
                }
                else{
                    console.log("Some error occured")
                }
        })
        .catch(error =>{
            console.log('err',error)
        })
    }
}

    componentDidMount(){
        // https://jsonplaceholder.typicode.com/users
        this.handleAxiosDrop()
        axios({
            method : 'get',
            url : 'https://jsonplaceholder.typicode.com/users',
            // headers : {
            //     AuthKey : 'asdfgh'
            // },
            // data : {
            //     "username" : firstNameReg ,
            //     "last_name" : lastNameReg,
            //     "contact" : contactNumReg,
            //     "dob" : dobReg,
            //     "state" : stateReg,
            //     "city" : cityReg,
            //     "gender" : genderReg,
            //     "prefCity" : pinReg,
            //     "email" : email
            // }
        })
        .then(resp =>{
            console.log(resp.data)
            this.setState({
                users : resp.data
            })
            console.log(this.state.users)
        })
        .catch(error =>{
            console.log('err',error)
        })
    }

    handleAxiosDrop() {
        // axios({
        //     method : 'post',
        //     // url : 'https://api.wappgo.com/legal251AppDashboardAPI/?parameter=paginateNewsalert',
        //     // data : {
        //     //     "category" : data_catgory,
        //     //     "page" : this.state.currentPage
        //     // } ,
        //     // headers : {
        //     //     "jwt" : localStorage.getItem('login')
        //     // }
        //    })
        //    .then(response =>{
        //        const data = response.data.data
        //         const forPage = response.data.TotalPages
        //         console.log(data)
        //         if(response.data.status === 200){
        //             this.setState({
        //                 pageCount : forPage,
        //                 users : data
        //             })
        //         }
        //         else{
        //             console.log('something went wrong');
        //         }
            
        //     this.renderTableData()
        //    })
        //    .catch(error => {
        //        console.log('error',error)
        //    })
    }


    handlePageClick = e =>{
        selectedPage = e.selected;
       const offset = selectedPage * this.state.perPage;

        this.setState({
        currentPage : selectedPage,
        offset : offset
        },()=>{
        this.handleAxiosDrop()
        } )
    }

    renderTableData() {
        return this.state.users.map((user) => {
           return (
               <React.Fragment key={user.id}>
              <tr >
                 <td className='date_w'>{user.username}</td>
                 <td className='time_w'>{user.email}</td>
                 <td>{user.phone}</td>
                 <td>{user.website}</td>
                 <td>{user.id}</td>
                 <td className='update_w'>
                    {/* {user.name}    <button className=' see_more'  >  See more</button> */}
                    <div className='row'>
                        <div className='col-lg-6 col-12 up_w'>
                            {user.name}
                        </div>
                        <div className='col-lg-6 col-12 btns_w'>
                            <div className="dropdown">
                                <button className="dropdown-toggle see_more" type="button" id="mentorDropdownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    See more
                                </button>
                                <div className="dropdown-menu" aria-labelledby="mentorDropdownButton">
                                    <a className="dropdown-item seemore_dropitem" href="#">Add</a>
                                    <a className="dropdown-item seemore_dropitem" href="#">Remove</a>
                                    <a className="dropdown-item seemore_dropitem1" href="#">More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                 </td>
              </tr>
              
              </React.Fragment>
           )
        })
     }

     renderTableHeader() {
        return(
            <React.Fragment>
                <th>Username</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Category</th>
                <th>Date</th>
                <th>Time</th>
            </React.Fragment>
        )
     }
    

    render() {
        const { username_Mentor, email_Mentor, dob_Mentor, qualification_Mentor, contactNumber_Mentor,totalPosts_Mentor,password_Mentor } = this.state
        return (
            <div className='whole_m'>
                <Header/>
                <div className='container-fluid'>
                    <div className='row mrgb_2'>
                        <div className='col-lg-6'>
                            <p className='cust_m'>MENTOR DETAILS</p> 
                        </div>
                        <div className='col-lg-6'>
                            <button className='add_btn_m' data-toggle="modal" data-target="#AddModal">ADD  </button>
                        </div>
                    </div>
                    <div className='table_m'>
                        <table className='table_1_m' >
                            <thead>
                                <tr>{this.renderTableHeader()}</tr>
                            </thead>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                     {/* pagination */}
                     {/* <div className='paginee'>
                        <ReactPaginate
                            previousLabel = {"<"}
                            nextLabel = {">"}
                            breakLabel = {"...."}
                            breakClassName = {"break-me"}
                            pageCount = {this.state.pageCount}
                            marginPagesDisplayed = {2}
                            pageRangeDisplayed = {5}
                            onPageChange = {this.handlePageClick}
                            containerClassName = {'pagination pg_1'}
                            subContainerClassName = {'pages pagination pg_1'}
                            activeClassName = {`active `}
                        />
                        <br/>  
                    </div> */}
                    <center>
                        <button className='see_more'>See More</button>
                    </center>
                </div>
                {/* Add Modal  */}
                <div className="modal fade" id="AddModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Details </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                       <div className="modal-body">
                       <form >
                       <div className="form-group">
                       <label htmlFor="username_Mentor " className=" labelMentor" >Username :</label>
                          <input 
                             type='text' 
                             id ="username_Mentor" 
                             name = "username_Mentor"
                      
                             className = "form-control inputElementMentor"
                             maxLength="30"
                             value = {username_Mentor}
                             onChange = {this.handelChange}
                           
                          ></input>
                          <p className="error" id="nameErrM">Username is required </p>
                          </div>

                        <div className="form-group">
                          <label  htmlFor="email_Mentor" className=" labelMentor">Email-Id :</label>
                          <input
                             type ="email"
                             id ="email_Mentor"
                             name = "email_Mentor"
                             maxLength="65"
                             className = "form-control inputElementMentor"
                             value = {email_Mentor}
                             onChange = {this.handelChange}

                           ></input>
                            <p className="error" id="emailErrM">Email is required </p>
                           </div>
                          
                           <div className="form-group">
                           <label  htmlFor="password_Mentor " className=" labelMentor">Password :</label>
                           <input 
                             type = "password"
                             id ="password_Mentor"
                             name = "password_Mentor"
                            //  minLength="8"
                             maxLength = "21"
                           
                             className = "form-control inputElementMentor"
                             value = {password_Mentor}
                             onChange = {this.handelChange}
                             ></input>
                              <p className="error" id="pswdErrM">Password is required </p>
                             </div>
                            
                             <div className="form-group">
                             <label htmlFor="contact_Mentor" className=" labelMentor" >Contact Number :</label>
                             <input 
                                type = "tel"
                                id ="contact_Mentor"
                                name = "contactNumber_Mentor"
                                maxLength='10'
                                
                                className = "form-control inputElementMentor"
                                value = {contactNumber_Mentor}
                                onChange = {this.handelChange}
                            ></input>
                             <p className="error" id="contactErrM">Contact Number is required </p>
                            </div>
                            
                            <div className="form-group">
                            <label htmlFor="DOB_Mentor" className=" labelMentor">Date of Birth :</label>
                            <input 
                                type = "date"
                                id ="DOB_Mentor"
                                name = "DOB_Mentor"
                                className = "form-control inputElementMentor"
                                value = {this.state.dob_Mentor}
                                onChange = {this.handelChangeDob}
                                ></input>
                                 <p className="error" id="dobErrM">Date of Birth is required </p>
                                </div>
                               
                                <div className="form-group">
                                <label htmlFor="qualification_Mentor" className="labelMentor" >Qualification :</label>
                                <input 
                                    type = "text"
                                    id = "qualification_Mentor"
                                    name = "qualification_Mentor"
                                    className = "form-control inputElementMentor"
                                    value = {qualification_Mentor}
                                    onChange = {this.handelChange}
                                    ></input>
                                     <p className="error" id="qualiErrM">Qualification is required </p>
                                    </div>
                                    <p className="labelMentor">Total Posts : {totalPosts_Mentor}</p>
                                <div className="modal-footer">
                              <button type="submit" className="btn btn-secondary submitBtnMentor"  onClick={this.handelSubmit} id="btnSubmit">Submit</button>
                              </div>
                               
                       </form>

                        </div> 
                   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mentor
