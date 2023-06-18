import { Route, Routes } from "react-router-dom"
import Login from "../Pages/Login"
import Dashboard from "../Pages/Dashboard"
import Announcement from "../Pages/Announcement"
import Students from "../Pages/Students"
import Teachers from "../Pages/Teachers"
import Assignments from "../Pages/Assignments"
import Profile from "../Pages/Profile"
import ProfileStudent from "../Pages/ProfileStudent"
import ChangePassword from "../Pages/ChangePassword"
import PrivateRoute from "./PrivateRoutes"

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>
            } />
            <Route path="/announcement" element={<PrivateRoute> <Announcement /> </PrivateRoute>} />
            <Route path="/students" element={<PrivateRoute> <Students /> </PrivateRoute>} />
            <Route path="/teachers" element={<PrivateRoute> <Teachers /> </PrivateRoute>} />
            <Route path="/assignments" element={<PrivateRoute> <Assignments /> </PrivateRoute>} />
            <Route path="/changepassword" element={<PrivateRoute> <ChangePassword /> </PrivateRoute>} />
            <Route path="/teachers/:id" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
            <Route path="/students/:id" element={<PrivateRoute> <ProfileStudent /> </PrivateRoute>} />
        </Routes>
    )
}

export default AllRoutes
