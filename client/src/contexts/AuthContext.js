import React, { createContext, useState, useEffect } from 'react';
import { verifyUser } from '../api/users';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, isLoggedIn: false });

    const setAuthData = (token) => {
        const isLoggedIn = token ? true : false;
        setAuth({ token: token, isLoggedIn: isLoggedIn });
    };

    useEffect(() => {
        async function setLoginStatus() {
            const token = await verifyUser();
            setAuthData(token);
        }

        setLoginStatus();
    }, []);

    return <authContext.Provider value={{ auth, setAuthData }}>{children}</authContext.Provider>;
};

export default AuthProvider;
