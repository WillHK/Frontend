// import { Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import Quote from './Quote';
import { MainButton, ProfileEdit, H2, CardStyle } from "./Styled/Styled";


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

    const search = (e) => {
        e.preventDefault();
        axios
            .post("http://34.220.255.46:8000/search", `search=${keyword}`)
            .then(response => {
                console.log('response from quote search (response.data)', response.data);

                // example response: 
                // [{'id':9550, 'character': 'Homer Simpson', 'quote': 'Why you little'}]

                setQuotes(response.data);
            })
            .catch(error => {
                console.log('Error response from quote search function', error);
            });
    };

    return (
        <div>
            <H2> Search for a Simpsons quote </H2>
            <form onSubmit={search}>
            <ProfileEdit>
                <input
                    type='text'
                    onChange={handleChange}
                />
            <MainButton>Search</MainButton>
            </ProfileEdit>
            </form>
            <CardStyle>
            {quotes.map(quote => {
                return (
                    <Quote 
                    character={quote.character}
                    id={quote.id}
                    quote={quote.quote}
                    />
                );
            })}
            </CardStyle>
        </div>
    )
};

export default QuoteList;
