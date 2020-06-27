import React, { createContext, useState } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null });

    const setAuthData = (data) => {
        setAuth({ token: data });
    };

    return <authContext.Provider value={{ auth, setAuthData }}>{children}</authContext.Provider>;
};

export default AuthProvider;
