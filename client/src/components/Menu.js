import React from 'react';
import { Link } from 'react-router-dom';
import IsLoggedIn from './IsLoggedIn';
import IsLoggedOut from './IsLoggedOut';
import Search from './Search';

const Menu = () => {
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
                        <Link to={'/Profile'}>Mein Profil</Link>
                    </li>
                </IsLoggedIn>
            </ul>
        </>
    );
};

export default Menu;
