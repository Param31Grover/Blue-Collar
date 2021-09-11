import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import JobDetails from "./components/job/JobDetails";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateListing from './components/job/CreateListing';
import Setup from './components/dashboard/Setup'
import DashboardHindi from './components/dashboard/DashboardHindi';
import UserProfile from './components/dashboard/UserProfile'
import Rights from './components/dashboard/Rights'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App background">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/hindi' component={DashboardHindi} />
            <Route path='/job/:id' component={JobDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateListing} />
            <Route path='/setup' component={Setup}/>
            <Route path='/rights' component={Rights} />
            <Route path='/profile' component={UserProfile} />
 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;