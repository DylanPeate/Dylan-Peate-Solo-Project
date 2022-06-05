import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div className='navBar'>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink exact to='/picture/create'>Upload</NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
