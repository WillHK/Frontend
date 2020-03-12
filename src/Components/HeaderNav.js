import React from 'react'
import { Link } from 'react-router-dom'
import {NavButton, HeaderButtonContainer} from './Styled/Styled'


export default function HeaderNav(props) {

    // function logout () {
    //     localStorage.removeItem('token');
    //     props.history.push('/');
    //     console.log('logged out');
    // }

    return (
        <HeaderButtonContainer className="nav-bar">
            {/* {!localStorage.token && <Link to="/"> <NavButton>Login</NavButton></Link>}
            {!localStorage.token && <Link to="/signup"> <NavButton>Sign Up</NavButton></Link>}
            {localStorage.token && <Link to="/protected"><NavButton>Home</NavButton></Link>}
            {localStorage.token && <Link to="/protected/search"><NavButton>Search Quotes</NavButton></Link>}
            {localStorage.token && <Link to="/protected/profile"><NavButton>Profile</NavButton></Link>}
            <a href="https://simpsonsays.netlify.com/team2.html"><NavButton>About Us</NavButton></a>
            {localStorage.token && <Link to="/"> <NavButton onClick={logout}>Logout</NavButton></Link>} */}
            <Link to="/search"><NavButton>Search Quotes</NavButton></Link>
        </HeaderButtonContainer>
    )
}

