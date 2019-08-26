import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Components/Login'
import SignupForm from './Components/SignupForm'
import QuoteList from './Components/QuoteList'
import SearchForm from './Components/SearchForm'

function App() {
  return (
    <div className="App">
      <PrivateRoute exact path='/' component={QuoteList} />

      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignupForm} />
    </div> 
  );
}

export default App;


