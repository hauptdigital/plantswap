import React, { useContext } from 'react';
import { authContext } from '../contexts/AuthContext';

function IsLoggedOut({ children }) {
    const { auth } = useContext(authContext);
    const isLoggedIn = auth.isLoggedIn;

    if (isLoggedIn) {
        return <></>;
    }

    return <>{children}</>;
}

export default IsLoggedOut;
