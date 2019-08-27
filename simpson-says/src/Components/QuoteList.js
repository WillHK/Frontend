// import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth'
import Quote from './Quote'
import { MainButton } from "./Styled/Styled";


const QuoteList = props => {
    const [keyword, setKeyword] = useState("");
    const [quotes, setQuotes] = useState([]);

    const handleChange = e => {
        return (
            //    console.log(`target value`, e.target.value);
            setKeyword(e.target.value),
            console.log('keyword: ', keyword)
        )
    };

    const search = () => {
        axiosWithAuth()
            .post("https://simpsons-says-nodejs.herokuapp.com/api/quotes", keyword)
            .then()
            .then(response => {
                console.log('response from get quote', response);
                const info = response.data.quotes;
                setQuotes(info);
            })
            .catch(error => {
                console.log('Server Error', error);
            });
    };

    // .then(res => {
    //     console.log(res);
    //     return axiosWithAuth().get(`http://localhost:5000/api/colors/`)
    //   })

    return (
        <container>
            <form onSubmit={search}>
                <input
                    type='text'
                    onChange={handleChange}
                />
                <MainButton>Search</MainButton>
            </form>


            {quotes.map(quote => {
                return (
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



