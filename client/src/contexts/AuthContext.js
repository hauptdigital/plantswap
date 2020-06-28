import React, { createContext, useState, useEffect } from 'react';
import { verifyUser } from '../api/users';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null });

    const setAuthData = (token) => {
        const isLoggedIn = token ? true : false;
        setAuth({ token: token, isLoggedIn: isLoggedIn });
    };

    useEffect(() => {
        async function getToken() {
            const token = await verifyUser();
            return token;
        }

        const token = getToken();
        setAuthData(token);
    }, []);

    return <authContext.Provider value={{ auth, setAuthData }}>{children}</authContext.Provider>;
};

export default AuthProvider;
