import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Logout from '../components/Logout';

const RegisterSignIn = () => {
    return (
        <div>
            <Login title="Einloggen" />
            <Register title="Registrieren" />
            <Logout />
        </div>
    );
};

export default RegisterSignIn;
