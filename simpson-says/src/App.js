import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Login from './Components/Login'
import SignupForm from './Components/SignupForm'
import QuoteList from './Components/QuoteList'
import SearchForm from './Components/SearchForm'
import PrivateRoute from './Utils/PrivateRoute'
import HeaderNav from './Components/HeaderNav'
import SavedList from './Components/SavedList'
import Profile from './Components/Profile'

function App() {
  return (
    <div className="App">
      <Route path="/" render={(props)=><HeaderNav {...props}/>} />
      <PrivateRoute exact path='/protected' component={SavedList}/>
      <PrivateRoute path='/protected/search' component={QuoteList} />
      <PrivateRoute path='/protected/profile' component={Profile} />
      <Route path='/signup' component={SignupForm} />
      <Route exact path='/' component={Login} />
      
    </div> 
  );
}

export default App;


