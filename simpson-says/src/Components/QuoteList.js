import React from "react";
import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import Quote from './Quote'

const QuoteList = props =>{
    const [quote, setQuote] = useState([])
    
    useEffect(() => {
      axiosWithAuth()
          .get("URL GOES HERE")
          .then(response => {
              const info = response.data; //check this after data url is rcvd
            setQuote(info);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      
    }, [])


return(

        // <div>
        //     <h1>Hello from Quotes component!</h1>
        // </div>

        ///////////
        <Container>
        {info.map(quote=>{
            return(
                <Quote
                line={quote.line} //these will need to be changed when data is rcvd
                url={quote.url}
        
                />
            );
        })}
            </Container>
    )
};

export default QuoteList;



