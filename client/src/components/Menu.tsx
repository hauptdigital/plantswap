import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function Menu() {
    return (
        <>
            <Search />
            <p>Kategorien</p>
            <Link to={'/about'}>Über Plants4Friends</Link>
            <Link to={'/register'}>Registrieren / einloggen</Link>
            <Link to={'/Profile'}>Mein Profil</Link>
        </>
    );
}

export default Menu;
