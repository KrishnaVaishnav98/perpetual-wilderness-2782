import { Authcontext } from '../Context/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    const { isAuth } = useContext(Authcontext)
    console.log("Auth here...", isAuth)

    if (!isAuth) {
        return <Navigate to="/" />
    }
    return children
}

export default PrivateRoute;