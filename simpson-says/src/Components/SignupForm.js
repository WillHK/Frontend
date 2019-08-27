import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MainButton, NavButton, FormDiv, H2 } from "./Styled/Styled";

export default function SignUpForm (props) {

    const [newCreds, setNewCreds] = useState({ username: '', password: '' })

    const handleChange = e => {
        setNewCreds({ ...newCreds, [e.target.name]: e.target.value });
    }

    function signup(e) {
        e.preventDefault();
        axios
            .post('https://simpsons-says-nodejs.herokuapp.com/api/register/', newCreds)
            .then(res => {
                console.log(res);
                // localStorage.setItem('token', res.data.payload);
                // setCreds({
                //     username: '',
                //     password: ''
                // });
                props.history.push("/");
            })
            .catch(err => {
                console.log(err.response.data.error);
                // setCreds({
                //     username: '',
                //     password: ''
                // })
            });
    }

    return (
        <div>
            <H2>Sign up to create your account</H2>

            <form onSubmit={signup}>
                <FormDiv>
                    <label for='username'>Username
                    <input
                        type='username'
                        name='username'
                        value={newCreds.username}
                        onChange={handleChange}
                        />
                    </label>
                <label for='password'>Password
                <input 
                    type='password'
                    name='password'
                    value={newCreds.password}
                    onChange={handleChange}
                    />
                </label>
                <MainButton>Sign Up</MainButton>
                </FormDiv>
            </form>


        </div>
    );
}

