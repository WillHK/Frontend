import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MainButton, FormDiv, H2, Option, LoginMain, ImageContainer, Img, Select } from "./Styled/Styled";

export default function SignUpForm (props) {

    const [newCreds, setNewCreds] = useState({ 
        username: '', 
        password: '', 
        favChar: '',
        
    });
    const [signupStatus, setSignupStatus] = useState('');

    const handleChange = e => {
        setNewCreds({ ...newCreds, [e.target.name]: e.target.value });
        console.log('newCreds: ', newCreds)
    }

    function signup(e) {
        console.log(`newCreds sent to signup: `, newCreds);
        e.preventDefault();
        axios
            .post('https://simpsons-says-nodejs.herokuapp.com/api/register/', newCreds)
            .then(res => {
                console.log("response from signup call: ", res);
                // localStorage.setItem('token', res.data.payload);
                // setCreds({
                //     username: '',
                //     password: ''
                // });
                props.history.push("/");
            })
            .catch(err => {
                console.log(err);
                setSignupStatus(`${err}`);
                setNewCreds({
                    username: '',
                    password: ''
                })
            });
    }

    return (
        <div>
            <H2>Sign up to create your account</H2>
            <LoginMain>
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
                <label for='favChar'>Favorite Simpson
                <Select name='favChar' onChange={handleChange} value={newCreds.favChar}>
                <option value="Homer">Homer</option>
                <option value="Marge">Marge</option>
                <option value="Lisa">Lisa</option>
                <option value="Bart">Bart</option>
                <option value="Maggie">Maggie</option>
                <option value="Grandpa">Grandpa Simpson</option>
                <option value="Santa's Little Helper">Santa's Little Helper</option>
                  
                    </Select>
                    
                </label> 
                <MainButton>Sign Up</MainButton>
                {{signupStatus} && <p>{signupStatus}</p>}
                </FormDiv>
            </form>
            <Img src = "https://i.ibb.co/bL1LSMk/simpsons-PNG63.png" alt="simpson family" />

            </LoginMain>


        </div>
    );
}

