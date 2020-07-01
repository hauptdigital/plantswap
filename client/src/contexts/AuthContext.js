import React, { createContext, useState, useEffect } from 'react';
import { getAuthenticatedUser } from '../api/auth';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null, isLoggedIn: false });

    const setAuthData = (userName) => {
        const isLoggedIn = userName ? true : false;
        setAuth({ user: userName, isLoggedIn: isLoggedIn });
    };

    useEffect(() => {
        async function setLoginStatus() {
            const userName = await getAuthenticatedUser();
            setAuthData(userName);
        }

        setLoginStatus();
    }, []);

    return <authContext.Provider value={{ auth, setAuthData }}>{children}</authContext.Provider>;
};

export default AuthProvider;
