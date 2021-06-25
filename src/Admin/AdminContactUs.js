import React,{Component} from 'react'
import '../css/contactUsForm.css'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import Header from './Header'
import $ from 'jquery'
let selectedPage;

class AdminContactUs extends Component {

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
    // axios({
    //     method : 'get',
    //     url : 'https://jsonplaceholder.typicode.com/users',
    //     // headers : {
    //     //     "jwt" : localStorage.getItem('login')
    //     // }
    // })
    // .then(resp =>{
    //     console.log(resp.data)
    //     this.setState({
    //         users : resp.data
    //     })
    //     console.log(this.state.users)
    // })
    // .catch(error =>{
    //     console.log('err',error)
    // })
}

handleAxiosDrop() {
    axios({
          method : 'post',
          url : 'http://localhost:3001/contactusdata',
          headers : {
              AuthKey : 'asdfgh '
          },
          data : {
              page : this.state.currentPage
          }
       })
       .then(response =>{
           const data = response.data.data
            const forPage = response.data.TotalPages
            console.log(data)
            console.log(this.state.currentPage)
            if(response.data.status === 200){
                this.setState({
                    pageCount : forPage,
                    users : data
                })
                console.log(data)
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

mane = (id,msg,sub) =>{
//    console.log('id',id,'msg',msg)
//    exampleTitleTT
   $('#exampleTitleTT').html(sub)
   $('#viewD').html(msg)
}

renderTableData() {
    return this.state.users.map((user) => {
       return (
           <React.Fragment key={user._id}>
          <tr >
             <td >{user.updatedAt}</td>
             <td >{user.username}</td>
             <td>{user.email}</td>
             <td>{user.queryId}</td>
             <td >
                <div className='row'>
                    <div className='col-lg-6 col-12 up_w'>
                        {user.message}
                    </div>
                    <div className='col-lg-6 col-12 btns_w'>
                        <button className="see_more" type="button" data-toggle="modal" data-target="#viewModal" id={user._id} onClick={ () => this.mane(user._id , user.message, user.subject) }>
                            See more
                        </button>
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
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Query ID</th>
            <th>Subject</th>
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
                        <p className='cust'>CONTACT DETAILS</p>
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
                {/* pagination */}
                <div className='paginee'>
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
                </div>
                {/* <center>
                        <button className='see_more'>See More</button>
                    </center> */}
            </div>
             {/* <!--view Modal --> */}
             <div className="modal fade" id="viewModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleTitleTT"></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div id='viewD'></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default AdminContactUs

