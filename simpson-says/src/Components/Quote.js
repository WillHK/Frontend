import React from "react";
import styled from 'styled-components';

const Qutes = props => {

    return (
        <div>
            <section>
            <img src={props.url} />
                <H1>{props.name}</H1>                
                {/* <H2> Episode: {props.line}</H2> */}
                <H2>Quote: {props.line}</H2>
                {/* <H2>Character: {props.char}</H2> */}
            </section>
            </div>
    )
}

export default Quotes;