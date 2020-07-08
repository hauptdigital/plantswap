import React, { useContext } from 'react';
import { authContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import IsLoggedIn from './IsLoggedIn';
import IsLoggedOut from './IsLoggedOut';
import Search from './Search';

const Menu = () => {
    const { auth } = useContext(authContext);
    const userName = auth.user ? auth.user : '';
    return (
        <>
            <Search />
            <p>Kategorien</p>
            <ul>
                <li>
                    <Link to={'/about'}>Über Plants4Friends</Link>
                </li>
                <IsLoggedOut>
                    <li>
                        <Link to={'/register'}>Registrieren / einloggen</Link>
                    </li>
                </IsLoggedOut>
                <IsLoggedIn>
                    <li>
                        <Link to={'/profile/' + userName}>Mein Profil</Link>
                    </li>
                </IsLoggedIn>
            </ul>
        </>
    );
};

export default Menu;
