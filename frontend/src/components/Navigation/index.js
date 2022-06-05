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
            <>
                <div className='uploadIcon'>
                    <NavLink exact to='/picture/create'>
                        <i className="fa-solid fa-file-arrow-up fa-2xl navBtn"></i>
                    </NavLink>
                </div>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <div className='topRight'>
                    <div className='loginForm'>
                        <LoginFormModal />
                    </div>
                    <div className='signup'>
                        <NavLink to="/signup">
                            <i className="fa-solid fa-user-plus fa-2xl navBtn"></i>
                        </NavLink>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className='navBar-container'>
            <div className='homeIcon'>
                <NavLink exact to="/">
                    <i id="homeBtnIcon" className="fa-solid fa-house fa-2xl navBtn">
                        Pictore
                    </i>
                </NavLink>
            </div>
            <div className='topRight'>
                <div className='sessionLinks'>
                    {isLoaded && sessionLinks}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
