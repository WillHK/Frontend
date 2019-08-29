import React, {useState, useEffect} from 'react';
import { H2, H1, Option, MainButton, Select, ProfileEdit, AvatarImg} from './Styled/Styled'

import { axiosWithAuth } from '../Utils/axiosWithAuth';


export default function Profile (props) {
    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: "",
        favChar: "",
        }
    );

    const userid = localStorage.userid;
    
    const toggleMode = e => {
        e.preventDefault();
        setEditing(!editing);
        console.log('toggling! ', editing);
      };

      useEffect(() => {
        axiosWithAuth()
          .get(`https://simpsons-says-nodejs.herokuapp.com/api/users/${userid}`)
          .then(res => {
              console.log('response from getUserData: ', res);
              setUser({
                ...user,
                username: res.data.user.username,
                favChar: res.data.user.favChar})
          })
          .catch(err => console.log(err.response));
      },[userid])

      let avatar = "";
      switch (user.favChar) {
        case "Homer":
          avatar = "https://i.ibb.co/BKDQTZ1/simpsons-PNG15.png";
          break;
        case "Marge":
          avatar = "https://i.ibb.co/DVBD5bH/simpsons-PNG56.png";
          break;
        case "Lisa":
          avatar = "https://i.ibb.co/P9XbT7w/simpsons-PNG1.png";
          break;
        case "Bart":
          avatar = "https://i.ibb.co/KD5y91L/simpsons-PNG42.png";
          break;
        case "Maggie":
          avatar = "https://i.ibb.co/Xb1ffWY/simpsons-PNG55.png";
          break;
        case "Grandpa":
          avatar = "https://i.ibb.co/P17mrTB/simpsons-PNG69.png";
          break;
        case "Santa's Little Helper":
          avatar = "https://vignette.wikia.nocookie.net/simpsons/images/2/2c/Santa%27s_Little_Helper.png/revision/latest?cb=20180311074656";
          break;
        default:
          avatar = "https://i.ibb.co/gwh6C5f/simpsons-PNG84.png";
      }

      const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log('user to update: ', user);
    }

    function updateUser(e) {
        console.log(`updated creds sent: `, user);
        e.preventDefault();
        axiosWithAuth()
            .put(`https://simpsons-says-nodejs.herokuapp.com/api/users/${userid}`, user)
            .then(res => {
                console.log('response from put request to update user: ', res);
                // props.history.push("/protected");
            })
            .catch(err => {
                console.log('error', err);
                // setSignupStatus(`${err}`);
                setUser({
                    username: '',
                    password: '',
                    favChar: "",
                })
            });
          setEditing(false)
    }

      if(!editing) {
          return (
        <div>
            <H1>Your Account</H1>
            <MainButton onClick={toggleMode}>Edit Details</MainButton>
            <H2>Username: {user.username}</H2>
            <H2>Favorite Simpson: {user.favChar}</H2>
            <AvatarImg src = {avatar} />
        </div>
    )} 
    else {
        return(
            <div>
                <H1>Edit Account Details</H1>
                <form>
                <ProfileEdit>
                <label for='username'>Username
                    <input
                        type='username'
                        name='username'
                        value={user.username}
                        onChange={handleChange}
                        />
                    </label>
                <label for='password'>Password
                <input 
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                    />
                </label>
                <label for='favChar'>Favorite Simpson
                <Select name='favChar' onChange={handleChange} value={user.favChar}>
                <Option value="Homer">Homer</Option>
                <Option value="Marge">Marge</Option>
                <Option value="Lisa">Lisa</Option>
                <Option value="Bart">Bart</Option>
                <Option value="Maggie">Maggie</Option>
                <Option value="Grandpa">Grandpa</Option>
                <Option value="Santa's Little Helper">Santa's Little Helper</Option>
                  
                </Select>
                </label> 
                <MainButton type='submit' onSubmit={updateUser}>Save</MainButton>
                </ProfileEdit>
                </form>
                <button  type="button" onClick={toggleMode}>cancel editing</button>
            </div>
        )
    } 

}