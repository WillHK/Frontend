import React from "react";
import styled from 'styled-components';
import { MainButton, NavButton, FormDiv, H2, QuoteCard } from "./Styled/Styled";
import { axiosWithAuth } from '../Utils/axiosWithAuth';


const Quote = props => {

    function saveQuote(){
        console.log('quote saved!');
        // axiosWithAuth()
        //     .post()
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
                <div onClick={this.saveQuote}>Save</div>
                <div onClick={this.deleteQuote}>Delete</div>
            </QuoteCard>
            </div>
    )
}

export default Quote;