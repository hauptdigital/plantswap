import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const RegisterSignIn = () => {
    return (
        <div>
            <Login title="Einloggen" />
            <Register title="Registrieren" />
        </div>
    );
};

export default RegisterSignIn;
