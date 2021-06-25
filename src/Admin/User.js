import React, { Component } from 'react'
import '../css/userA.css'
import axios from 'axios'
import Header from './Header'
import '../css/Paginate.css'

class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users : [],
             users2 : [],
             j : 10,
             offset : 0,
             data : [],
             perPage : 9 ,
             currentPage : 1,
             totalPages : 0,
             category : 'student'
        }
    }

    componentDidMount(){
        this.handleAxiosDrop()
    }

    handleAxiosDrop() {
        axios({
            method : 'post',
            url : 'http://localhost:3001/adminUsersData',
            headers : {
                AuthKey : 'asdfgh'
            },
            data : {
                "category" : 'userDetails',
                // "page" : '1'
            }
           })
           .then(response =>{
               const data = response.data.data
                const forPage = response.data.TotalPages
                console.log(response.data)
                if(response.data.status === 200){
                    this.setState({
                        pageCount : forPage,
                        users : data,
                        users2 : this.state.users.slice(0,this.state.j)
                    })
                    console.log("data",this.state.users)
                }
                else{
                    console.log('something went wrong');
                }
            
            this.renderTableData()
           })
           .catch(error => {
               console.log('error',error)
           })
    }

    submitHandler = () =>{
            
        this.setState({
            j : this.state.j + 5,
            users2 : this.state.users.slice(0,this.state.j)
        });
    }



    renderTableData() {
        return this.state.users.map((user) => {
           return (
               <React.Fragment key={user._id}>
              <tr >
              <td>{user.userID}</td>
                 <td >{user.first_name} {user.last_name}</td>
                 <td >{user.email}</td>
                 <td>{user.category}</td>
                 
                 
              </tr>
              
              </React.Fragment>
           )
        })
     }

     renderTableHeader() {
        return(
            <React.Fragment>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Category</th>
                
            </React.Fragment>
        )
     }
    

    render() {
        return (
            <div className='whole'>
                <Header/>
                <div className='container-fluid'>
                    <div className='row mrgb_1'>
                        <div className='col-lg-6'>
                            <p className='cust'>CUSTOMER DETAILS</p>
                        </div>
                        {/* <div className='col-lg-6'>
                            <button className='add_btn'>ADD  </button>
                        </div> */}
                    </div>
                    {/* sort by button */}
                    <div className='table_d'>
                        <table className='table_1' >
                            <thead>
                                <tr>{this.renderTableHeader()}</tr>
                            </thead>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                    {/* <center>
                        <button className='see_more'>See More</button>
                    </center> */}
                </div>
            </div>
        )
    }
}

export default User
