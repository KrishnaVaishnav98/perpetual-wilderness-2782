import React, { createContext, useEffect, useState } from 'react'

export const Authcontext = createContext()

const obj = {
    isAuth: false,
    loading: false,
    error: null,
    token: "",
    data: []
}

export default function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(obj.isAuth);
    const [token, setToken] = useState(obj.token)

    const logIn = (token) => {
        setIsAuth(true);
        setToken(token);
    }
    const logOut = () => {
        setIsAuth(false);
        setToken("");
    }

    return (
        <div>

            <Authcontext.Provider value={{ isAuth, token, logIn, logOut }}>
                {children}
            </Authcontext.Provider>

        </div>
    )
}