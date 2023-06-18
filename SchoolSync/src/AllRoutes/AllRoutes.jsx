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

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/teachers/:id" element={<Profile />} />
            <Route path="/students/:id" element={<ProfileStudent />} />
        </Routes>
    )
}

export default AllRoutes
