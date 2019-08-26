import React from "react";
import styled from 'styled-components';

const Quote = props => {

    return (
        <div>
            <section>
            <img src={props.url} />
                <h1>{props.name}</h1>                
                {/* <H2> Episode: {props.line}</H2> */}
                <h2>Quote: {props.line}</h2>
                {/* <H2>Character: {props.char}</H2> */}
            </section>
            </div>
    )
}

export default Quote;