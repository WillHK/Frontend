import React, {useState} from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { MainButton, TopButton } from "./Styled/Styled";



function Login () {

    const [creds, setCreds] = useState({ email: '', password: '' })

    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    function login(e) {
        e.preventDefault();
        axios
            .post('endpoint', creds)
            .then(res => {
                console.log(res);
                // localStorage.setItem('token', res.data.payload);
                // setLoginStatus("Success!");
                // setCreds({
                //     email: '',
                //     password: ''
                // });
                // props.history.push("/protected");
            })
            .catch(err => {
                console.log(err.response.data.error);
                // setLoginStatus(`${err.response.data.error}`);
                // setCreds({
                //     email: '',
                //     password: ''
                // })
            });
    }

    return (
        <>
        <h2>Log in to see and save favorite quotes</h2>
            <form onSubmit={login}>
                <input
                    type='email'
                    name='email'
                    value={creds.email}
                    onChange={handleChange}
                    />
                <input 
                    type='password'
                    name='password'
                    value={creds.password}
                    onChange={handleChange}
                    />
                <MainButton>Log In</MainButton>
            </form>
        </>
    );
}

export default Login