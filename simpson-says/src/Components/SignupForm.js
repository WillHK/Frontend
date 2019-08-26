import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MainButton, TopButton } from "./Styled/Styled";

export default function SignUpForm () {

    const [newCreds, setNewCreds] = useState({ email: '', password: '' })

    const handleChange = e => {
        setNewCreds({ ...newCreds, [e.target.name]: e.target.value });
    }

    function signup(e) {
        e.preventDefault();
        axios
            .post('signup-endpoint', newCreds)
            .then(res => {
                console.log(res);
                // localStorage.setItem('token', res.data.payload);
                // setCreds({
                //     email: '',
                //     password: ''
                // });
                // props.history.push("/protected");
            })
            .catch(err => {
                console.log(err.response.data.error);
                // setCreds({
                //     email: '',
                //     password: ''
                // })
            });
    }

    return (
        <div>
            <h1>Sign up to create your account</h1>

            <form onSubmit={signup}>
                <input
                    type='email'
                    name='email'
                    value={newCreds.email}
                    onChange={handleChange}
                    />
                <input 
                    type='password'
                    name='password'
                    value={newCreds.password}
                    onChange={handleChange}
                    />
                <TopButton>Sign Up</TopButton>
            </form>


        </div>
    );
}

