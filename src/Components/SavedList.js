import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import {H2} from './Styled/Styled'


import Quote from './Quote'


export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        favorites: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  // userid = localStorage.userid;

  getData = () => {
    axiosWithAuth()
      .get(`https://simpsons-says-nodejs.herokuapp.com/api/users`) // ${userid}
      .then(res => {
          console.log('response from get saved quotes: ', res);
        // this.setState({
        //   user: res.data.username,
  
        //   favorites: res.data.favorites //talk to be about savedQuotes endpoint
        // });
        
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className="saved-list">
         <H2>Hello, {this.state.username}!</H2>
         <H2>Saved Quotes:</H2>
         {this.state.favorites.map(quote => {
          return (
            <Quote 
                key={quote.id}
                line={quote.quote} 
                episode={quote.episode}
                character={quote.character}
            />
          );
        })}
      </div>
    );
  }
}