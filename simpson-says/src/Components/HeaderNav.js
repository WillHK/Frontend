import React from 'react'
import { Link } from 'react-router-dom'
import {NavButton, HeaderButtonContainer} from './Styled/Styled'


export default function HeaderNav(props) {

    function logout () {
        localStorage.removeItem('token');
        props.history.push('/');
        console.log('logged out');
    }

    return (
        <HeaderButtonContainer className="nav-bar">
            {!localStorage.token && <Link to="/"> <NavButton>Login</NavButton></Link>}
            {!localStorage.token && <Link to="/signup"> <NavButton>Sign Up</NavButton></Link>}
            {localStorage.token && <Link to="/protected"><NavButton>Quotes</NavButton></Link>}
            <Link to="/about"><NavButton>About Us</NavButton></Link>
            {localStorage.token && <Link to="/"> <NavButton onClick={logout}>Logout</NavButton></Link>}
        </HeaderButtonContainer>
    )
}

