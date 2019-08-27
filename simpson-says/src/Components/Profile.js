import React, {useState} from 'react';
import {NavButton, H2} from './Styled/Styled'

import { axiosWithAuth } from '../Utils/axiosWithAuth';


export default function Profile (props) {
    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        favChar: "",
        }
    );
    
    const toggleMode = e => {
        e.preventDefault();
        setEditing(!editing);
        console.log('toggling! ', editing);
      };

    const getUserData = () => {
        axiosWithAuth()
          .get('https://simpsons-says-nodejs.herokuapp.com/api/login')
          .then(res => {
              console.log('response from getUserData: ', res);
              setUser(res.data)
          })
          .catch(err => console.log(err.response));
      };

      if(editing) {
          return (
        <div>
            <h1>Hello from the profile!</h1>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Password: {user.password}</h2>
            <button onClick={toggleMode}>Edit</button>
        </div>
    )} 
    else {
        return(
            <div>
                <form>
                <p>this p will be replaced with inputs</p>
                <button onClick={toggleMode}>Save</button>
                </form>
            </div>
        )
    } 

}