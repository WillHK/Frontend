import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Login from './Components/Login'
import SignupForm from './Components/SignupForm'
import QuoteList from './Components/QuoteList'
import SearchForm from './Components/SearchForm'
import PrivateRoute from './Utils/PrivateRoute'

function App() {
  return (
    <div className="App">
      {/* <PrivateRoute exact path='/' component={QuoteList} /> */}
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Route path='/signup' component={SignupForm} />
      <Route path='/login' component={Login} />
      
    </div> 
  );
}

export default App;


