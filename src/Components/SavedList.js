import React, { Component } from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import {H2} from './Styled/Styled'


import Quote from './Quote'


export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        favorites: [],
        userid: localStorage.userid
    }
  }

  componentDidMount() {
    this.getData();
  }

  

  getData = () => {
    axiosWithAuth()
      .get(`https://simpsons-says-nodejs.herokuapp.com/api/users/${this.state.userid}`) 
      .then(res => {
          console.log('response from get saved quotes: ', res);
        this.setState({
          username: res.data.user.username,
          favorites: res.data.user.favorites 
        });
        console.log('current state of SavedList component', this.state);
      })
      .catch(err => console.log('error getting saved quotes', err.response));
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
                id={quote.id}
                quote={quote.quote} 
                character={quote.character}
            />
          );
        })}
      </div>
    );
  }
}