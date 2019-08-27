import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { axiosWithAuth } from '../Utils/axiosWithAuth';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        favoriteQuotes: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('https://simpsons-says-nodejs.herokuapp.com/api/login')
      .then(res => {
          console.log('response from get saved quotes: ', res);
        // this.setState({
        //   favoriteQuotes: res.data.favoriteQuotes //talk to be about savedQuotes endpoint
        // });
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className="saved-list">
         <h3>Saved Quotes:</h3>
         {this.props.list.map(quote => {
          return (
            <Quote 
                key={quote.id}
                line={quote.quote} 
                episode={quote.episode}
                character={quote.character}
            />
          );
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}