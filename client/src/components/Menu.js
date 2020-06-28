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
            <Link to={'/about'}>Über Plants4Friends</Link>
            <IsLoggedOut>
                <Link to={'/register'}>Registrieren / einloggen</Link>
            </IsLoggedOut>
            <IsLoggedIn>
                <Link to={'/Profile'}>Mein Profil</Link>
            </IsLoggedIn>
        </>
    );
};

export default Menu;
