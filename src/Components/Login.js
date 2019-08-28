import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { MainButton, FormDiv, H2, LoginMain, P, Img, ImageSize } from "./Styled/Styled";
// import SimpsonsFam from '../images/SimpsonsFam.png'



function Login (props) {

    const [creds, setCreds] = useState({ username: '', password: '' });
    const [loginStatus, setLoginStatus] = useState('');

    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    function login(e) {
        e.preventDefault();
        axios
            .post('https://simpsons-says-nodejs.herokuapp.com/api/login', creds)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userid', res.data.userid); // this may not be called userid -- check with backend or check console for res
                setLoginStatus("Success!");
                setCreds({
                    username: '',
                    password: ''
                });
                props.history.push("/protected");
            })
            .catch(err => {
                console.log(err);
                setLoginStatus(`${err}`);
                setCreds({
                    username: '',
                    password: ''
                })
            });
    }

    return (
        <>
        <H2>Log in to see and save your favorite Simpsons quotes</H2>
        <LoginMain>
            <form onSubmit={login}>
            <FormDiv>

                <label for='username'>Username
                <input
                    type='username'
                    name='username'
                    value={creds.username}
                    onChange={handleChange}
                    />
                </label>
                <label for='password'>Password
                <input 
                    type='password'
                    name='password'
                    value={creds.password}
                    onChange={handleChange}
                    />
                </label>
                <MainButton>Log In</MainButton>
                <P>Don't have an account? </P>
                <P><Link to='/signup'>Sign up here</Link></P>
                {loginStatus && <P>{loginStatus}</P>}
                </FormDiv>

            </form>
            
            <img src = "https://i.ibb.co/Mf1vRQB/simpsons-PNG67.png" alt="simpsons family picture"/>
            </LoginMain>
        </>
    );

}

export default Login