import React, { createContext, useEffect, useState } from 'react'

export const Authcontext = createContext()

const obj = {
    isAuth: false,
    loading: false,
    error: null,
    role: "",
    data: []
}

export default function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(obj.isAuth);
    const [role, setRole] = useState(obj.role)

    const logIn = (token) => {
        setIsAuth(true);
        setRole(token);
    }
    const logOut = () => {
        setIsAuth(false);
        setRole("");
    }

    return (
        <div>

            <Authcontext.Provider value={{ isAuth, role, logIn, logOut }}>
                {children}
            </Authcontext.Provider>

        </div>
    )
}