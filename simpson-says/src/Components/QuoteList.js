// import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth'
import Quote from './Quote'

const QuoteList = props =>{
    const [quotes, setQuotes] = useState([])
    
    useEffect(() => {
      axiosWithAuth()
          .get("https://simpsons-says-nodejs.herokuapp.com/api/quotes")
          .then(response => {
              console.log('response from get quote', response);
              const info = response.data.quotes; 
              setQuotes(info);
          })
          .catch(error => {
            console.log('Server Error', error);
          });
      
    }, [])


return(
        <container>
          {quotes.map(quote=>{
            return(
                <Quote 
                key={quote.id}
                line={quote.quote} 
                episode={quote.episode}
                character={quote.character}
                />
            );
        })}
            </container> 
    )
};

export default QuoteList;



