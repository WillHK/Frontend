import React from "react";
import styled from 'styled-components';
import { H2, QuoteCard } from "./Styled/Styled";
import { axiosWithAuth } from '../Utils/axiosWithAuth';


const Quote = props => {

    // let body = {
    //     quote_id: ''// id of quote you want to save
    //     user_favorites: ''// user ID from local storage
    // }

    function saveQuote(){
        console.log('quote saved!');
        axiosWithAuth()
            // .post('https://simpsons-says-nodejs.herokuapp.com/api/user/quotes', body)
        //     .then(res => {

        //     })
        //     .catch(err => {

        //     })
    }

    function deleteQuote(){
        console.log('quote removed from saved list!');
        // axiosWithAuth()
        // .delete()
        // .then(res => {

        // })
        // .catch(err => {

        // })
    }

    return (
        <div>
            <QuoteCard>
            {/* <img src={props.url} /> */}
                <H2>{props.character}:</H2>                
                <H2>{`"${props.line}"`}</H2>
                <H2> Episode: {props.episode}</H2>
                <div onClick={saveQuote}>Save</div>
                <img onClick={deleteQuote} src='https://static.simpsonswiki.com/images/b/bb/Trash_Can_Tapped_Out.png'/>
            </QuoteCard>
            </div>
    )
}

export default Quote;