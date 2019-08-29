// import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import Quote from './Quote';
import { MainButton, ProfileEdit, H2 } from "./Styled/Styled";


const QuoteList = props => {
    const [keyword, setKeyword] = useState("");
    const [quotes, setQuotes] = useState([]);

    const handleChange = e => {
        return (
            //    console.log(`target value`, e.target.value);
            setKeyword(`'"${e.target.value}"'`),
            console.log('keyword: ', keyword)
        )
    };

    const search = () => {
        axios
            .post("https://retirementhunt.xyz/search", JSON.stringify(keyword))
            .then(response => {
                console.log('response from quote search', response);
                // const info = response.data.quotes;
                // setQuotes(info);
            })
            .catch(error => {
                console.log('Error response from quote search function', error);
            });
    };

    // .then(res => {
    //     console.log(res);
    //     return axiosWithAuth().get(`http://localhost:5000/api/colors/`)
    //   })

    return (
        <div>
            <H2> Search for a quote </H2>
            <form onSubmit={search}>
            <ProfileEdit>
                <input
                    type='text'
                    onChange={handleChange}
                />
            <MainButton>Search</MainButton>
            </ProfileEdit>
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
        </div>
    )
};

export default QuoteList;



