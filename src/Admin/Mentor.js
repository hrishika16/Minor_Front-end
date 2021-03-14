import React, { Component } from 'react'
import axios from 'axios'
import Header from "./Header";
import '../css/mentor.css'

class Mentor extends Component {
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
                 <td className='date_w'>{user.username}</td>
                 <td className='time_w'>{user.email}</td>
                 <td>{user.phone}</td>
                 <td>{user.website}</td>
                 <td>{user.id}</td>
                 <td className='update_w'>
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
            <div className='whole_m'>
                <Header/>
                <div className='container-fluid'>
                    <p className='cust_m'>MENTOR DETAILS</p>
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
                </div>
            </div>
        )
    }
}

export default Mentor
