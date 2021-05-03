import React, { Component } from 'react'
import '../css/userA.css'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import Header from './Header'
import '../css/Paginate.css'
let selectedPage;

class Company extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users : [],
             offset : 0,
             data : [],
             perPage : 9 ,
             currentPage : 1,
             totalPages : 0
        }
    }

    componentDidMount(){
        // https://jsonplaceholder.typicode.com/users
        this.handleAxiosDrop()
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

    handleAxiosDrop() {
        axios({
            method : 'post',
            // url : 'https://api.wappgo.com/legal251AppDashboardAPI/?parameter=paginateNewsalert',
            // data : {
            //     "category" : data_catgory,
            //     "page" : this.state.currentPage
            // } ,
            // headers : {
            //     "jwt" : localStorage.getItem('login')
            // }
           })
           .then(response =>{
               const data = response.data.data
                const forPage = response.data.TotalPages
                console.log(data)
                if(response.data.status === 200){
                    this.setState({
                        pageCount : forPage,
                        users : data
                    })
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
                 <td >{user.username}</td>
                 <td >{user.email}</td>
                 <td>{user.phone}</td>
                 <td>{user.website}</td>
                 <td>{user.id}</td>
                 <td >
                    <div className='row'>
                        <div className='col-lg-6 col-12 up_w'>
                            {user.name}
                        </div>
                        <div className='col-lg-6 col-12 btns_w'>
                            <div className="dropdown">
                                <button className="dropdown-toggle see_more" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    See more
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item seemore_dropitem" href="#">Add</a>
                                    <a className="dropdown-item seemore_dropitem" href="#">Remove</a>
                                    <a className="dropdown-item seemore_dropitem1" href="#">More Details</a>
                                </div>
                        </div>
                        </div>
                    </div>
                    {/* <button className=' see_more'  >  See more</button>   dropdown see more - remove,suspend(cannot login from this account),more details(modal to show all details and edit option) */}   
                    
                    
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
                    <div className='row mrgb_1'>
                        <div className='col-lg-6'>
                            <p className='cust'>COMPANY DETAILS</p>
                        </div>
                        <div className='col-lg-6'>
                            <button className='add_btn'>ADD  </button>
                        </div>
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
            </div>
        )
    }
}

export default Company
