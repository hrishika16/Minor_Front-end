import react from 'react'
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
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
