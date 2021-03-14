import react from 'react'
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import AdminL from './Admin/AdminL';
import Alogin from './Admin/Alogin';
import Mentor from './Admin/Mentor';
import User from './Admin/User';
import Login from './login'
let isLoggedIn;
function App() {
  return (
    <div className="App">
     <BrowserRouter>
            <Switch>
              {/* login */}
              <Route exact path='/' component={Login}  />
              <Route exact path='/admin' component={AdminL}  />
              <Route exact path='/userA' component={User} />
              <Route exact path='/mentorA' component={Mentor} />
              <Route exact path='/adminLogin' component={Alogin} />
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
