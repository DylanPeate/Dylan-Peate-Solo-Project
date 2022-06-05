import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import * as sessionActions from '../../store/session';
import './Navigation.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showMenu, setShowMenu] = useState(true);
    const history = useHistory()

    const openMenu = () => {
        const menu = document.querySelector('.slideIn')
        if (showMenu) {
            menu.classList.remove('dismiss')
            menu.classList.add('selected')
        } else {
            setShowMenu(true);
            menu.classList.add('dismiss')
            menu.classList.remove('selected')
        }
    };

    useEffect(() => {
        console.log(showMenu)
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);

        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        history.push('/')
        dispatch(sessionActions.logout());
    };

    const visitProfile = (e) => {
        e.preventDefault();
        history.push(`/pictures/${sessionUser.id}`)
    }

    return (
        <>
            <div className="userMenuContainer">
                <button onClick={openMenu} id='userMenu' >
                    <i className="fa-solid fa-user-astronaut"></i>
                </button>
            </div>
            {true && (
                <div className="slideIn">
                    <ul className="profile-dropdown">
                        <li className="username">{user.username}</li>
                        <div className="dropDownButtons">
                            <li id="visitProfileContainer">
                                <button className="menuButton" onClick={visitProfile}>Your Pics</button>
                            </li>
                            <li id='logoutContainer'>
                                <button className="menuButton" onClick={logout}>Log Out</button>
                            </li>
                        </div>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
