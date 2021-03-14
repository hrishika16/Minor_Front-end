import React, { Component } from 'react'
import '../css/userA.css'
import axios from 'axios'
import see_more from '../img/plus.svg'
import Header from './Header'

class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users : []
        }
    }

    componentDidMount(){
        // https://jsonplaceholder.typicode.com/users
        axios({
            method : 'get',
            url : 'https://jsonplaceholder.typicode.com/users',
            // headers : {
            //     "jwt" : localStorage.getItem('login')
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

    renderTableData() {
        return this.state.users.map((user) => {
           return (
               <React.Fragment key={user.id}>
              <tr >
                 <td >{user.username}</td>
                 <td >{user.email}</td>
                 <td>{user.phone}</td>
                 <td>{user.website}</td>
                 <td>{user.id}</td>
                 <td >
                    {/* <div className='row'>
                        <div className='col-lg-8 col-4 up_w'>
                            {user.name}
                        </div>
                        <div className='col-lg-4 col-8 btns_w'>
                            <div className='fl'>
                                <button className=' see_more'  >  See more</button>
                               
                            </div>
                        </div>
                    </div> */}
                    {user.name}    <button className=' see_more'  >  See more</button>
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
        return (
            <div className='whole'>
                <Header/>
                <div className='container-fluid'>
                    <p className='cust'>CUSTOMER DETAILS</p>
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
                </div>
            </div>
        )
    }
}

export default User
