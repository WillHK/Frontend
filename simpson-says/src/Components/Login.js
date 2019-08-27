import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { MainButton, FormDiv, H2, LoginMain, P } from "./Styled/Styled";
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
            
            <img src = "https://ucced7f4c0418032354726f64169.previews.dropboxusercontent.com/p/thumb/AAhPnHs6V3IfPpVn7yKxWxvv25HfhX6jCxFhWDlM9XyPGSQV-3o2oSpT6HKTE8xQcBubQiJHPsmXxKWo5ORnrWPh0H2VrEKuwHThRJL4kao3TcICb6iXKmOnVEBH2VpXxmpX0bqOv6CFUbki9jDwuqEFSOdhTSEU89ZvvzJEz-Rscwn7NXYUAiHzv9KKcnAiA_8A4no7iPc8BhRJUPNwBm8PdiP1phVBGq2CnWMr34V2j97_MlwzCjjUxJnFuumLXZTg7udajMUzAlBO_fR47FpzApI715hfCHI7xDalaoUsJNfW2aPudxKcGegK-txrXuYjqrAOisJObPKhUW3hPmDVDfN7GK1NyJgfTBZKeZ0ZHxq-M2gvDyKcOBBbNN17-GkJTBz8JgmsalhUot44mQkb/p.png?size=1024x768&size_mode=3" alt="simpsons sign"/>
            </LoginMain>
        </>
    );

}

export default Login