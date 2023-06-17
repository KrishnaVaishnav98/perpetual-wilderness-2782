import React, { createContext, useEffect, useState } from 'react'

export const Authcontext = createContext()

export default function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(false);
    const [currentUser, setCurrentUser] = useState({})

    const logIn = (data) => {
        setIsAuth(true);
        setCurrentUser(data);
    }

    const logOut = () => {
        setIsAuth(false);
        setCurrentUser(null);
    }

    return (
        <div>

            <Authcontext.Provider value={{ isAuth, logIn, logOut, currentUser }}>
                {children}
            </Authcontext.Provider>

        </div>
    )
}