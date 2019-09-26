import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import '../css/App.css';

import LandingPage from '../components/LandingPage';
import Login from '../components/Login';
import UserRegister from '../components/UserRegister';
import UserLandingPage from '../components/UserLandingPage';
import CreateEvent from '../components/Create-Event';
import PersonalReview from '../components/PersonalReview';
import ProfileUser from '../components/Profile-User';

const App =()=>(
  <BrowserRouter>
    <div className="margen">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/user/register" component={UserRegister}/>
      <Route exact path="/user/userLandingPage" component={UserLandingPage}/>
      <Route exact path="/user/userLandingPage/createEvent" component={CreateEvent}/>
      <Route exact path="/user/userLandingPage/personalReview" component={PersonalReview}/>
      <Route exact path="/user/userLandingPage/ProfileUser" component={ProfileUser}/>
    </div>
  </BrowserRouter>
);

export default App;
