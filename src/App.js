import react from 'react'
import { BrowserRouter, Switch, Route,Redirect, Link } from 'react-router-dom';
import AdminContactUs from './Admin/AdminContactUs';
import AdminL from './Admin/AdminL';
import Alogin from './Admin/Alogin';
import Mentor from './Admin/Mentor';
import User from './Admin/User';
import Connections from './Connections';
import Company from './Admin/Company';
import JobSeeker from './Admin/JobSeeker';
import ContactUs from './ContactUs';
import ContactUsForm from './contactUsForm';
import Dashboard from './Dashboard';
import EmailSent from './EmailSent';
import Error404 from './Error404';
import ForgotPassword from './ForgotPassword';
import LandingPage from './LandingPage';
import Login from './login'
import Profession from './Profession';
import Profile from './Profile';
import RegisterU from './RegisterU';
import Step2 from './Step2';
import Waiting from './Waiting';
import MentorLogin from './Admin/MentorLogin';
import MentorProfile from './Admin/MentorProfile';
import MentorPost from './Admin/MentorPost';
import RegisterCompany from './RegisterCompany';
import CompanyLogin from './CompanyLogin';
import CompanyProfile from './CompanyProfile';
import Step3 from './Step3';
import Help from './Help';
import Privacy from './Privacy';
import Internship from './Internship';
import Test from './Test';
import SearchPage from './SearchPage';
import Hiring from './Hiring';
import HireDetails from './HireDetails';
import Oops from './oops';
import Notifications from './Notifications';
import ProfilePosts from './ProfilePosts';
import UserAbout from './UserAbout'
import ProfileStory from './ProfileStory';

let isLoggedIn;


function App() {
  return (
    <div className="App">
    <BrowserRouter>
            <Switch>
              {/* login */}
              <Route exact path='/login' component={Login}  />
              <Route exact path='/admin' component={AdminL}  />
              <Route exact path='/userA' component={User} />
              <Route exact path='/mentorA' component={Mentor} />
              <Route exact path='/adminLogin' component={Alogin} />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/register' component={RegisterU} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/page2' component={Step2} />
              <Route exact path='/page3' component={Profession} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/connections' component={Connections} />
              <Route exact path = '/contactUs' component={ContactUs}></Route>
              <Route exact path = '/contactUsForm' component={ContactUsForm}></Route>
              <Route exact path ='/forgotPassword' component={ForgotPassword}></Route>
              <Route exact path ='/adminContactUs' component={AdminContactUs} />
              <Route exact path ='/adminCompany' component={Company} />
              <Route exact path='/jobSeeker' component={JobSeeker} />
              <Route exact path='/404' component={Error404}></Route>
              <Route exact path ='/emailSent' component={EmailSent}></Route>
              <Route exact path = '/waiting/:token' component={Waiting}></Route>
              <Route exact path = '/step3' component={Step3}></Route>
              <Route exact path = '/help' component ={Help}></Route>
              <Route exact path ='/privacy' component = {Privacy}></Route>
              <Route exact path='/hiring' component={Internship} />
              <Route exact path = '/searchPage' component = {SearchPage}></Route>
              <Route exact path = '/hirecompany' component = {Hiring}></Route>
              <Route exact path = '/hiredetails' component = {HireDetails}></Route>
              <Route exact path = '/oops' component = {Oops}></Route>
              <Route exact path ='/notifications' component = {Notifications}></Route>
              <Route exact path ='/profilePosts' component = {ProfilePosts} />
              <Route exact path ='/aboutUser' component = {UserAbout}  />
              <Route exact path ='/aboutStory' component = {ProfileStory} /> 
              {/* Mentor Routes Starts */}
              <Route exact path = '/mentorLogin' component = {MentorLogin}></Route>
              <Route exact path = '/mentorProfile' component={MentorProfile}></Route>
              <Route exact path = '/mentorPost' component = {MentorPost}></Route>
              {/* Mentor Routes ends */}


              {/* Company Routes Starts */}
              <Route exact path='/registerForCompany' component={RegisterCompany} />
              <Route exact path = '/companyLogin' component = {CompanyLogin}></Route>
              <Route exact path = '/companyProfile' component={CompanyProfile}></Route>
              {/* Company Routes ends */}

              <Route exact path='/testing' component={Test} />
              {/* dashboard */}
              {/* <SecureRoute exact path='/dashboard' component={Dashboard}  /> */}
              {/* Error Handling */}
              {/* <Route path='/404' component={Sucess} /> */}
              <Redirect to='/404'/>
              
            </Switch> 
          </BrowserRouter> 
    </div>
  );
}

function SecureRoute(props){
  return(
    <Route path={props.path} render={data => authentication.getLogStatus() ? 
      (
        <props.component {...data} ></props.component> 
      ) : 
      (
        <Redirect to={{ pathname : '/' }} />
      )
    } >

    </Route>
  )
}

export const authentication = {
  onAuthentication(){
    isLoggedIn = true
    console.log('authe',isLoggedIn)
  },
  getLogStatus(){
    console.log('statusss',isLoggedIn)
    return isLoggedIn
  }
}

export default App;

/*abcd*/
