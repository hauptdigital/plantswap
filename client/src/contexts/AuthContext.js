import React, { createContext, useState } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null });

    const setAuthData = (token) => {
        const isLoggedIn = token ? true : false;
        setAuth({ token: token, isLoggedIn: isLoggedIn });
    };

    return <authContext.Provider value={{ auth, setAuthData }}>{children}</authContext.Provider>;
};

export default AuthProvider;
