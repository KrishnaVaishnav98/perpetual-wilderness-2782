import { Route, Routes } from "react-router-dom"
import Login from "../Pages/Login"
import Dashboard from "../Pages/Dashboard"
import Events from "../Pages/Events"
import Students from "../Pages/Students"
import Teachers from "../Pages/Teachers"
import Assignments from "../Pages/Assignments"
import Profile from "../Pages/Profile"
import ProfileStudent from "../Pages/ProfileStudent"

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/changepassword" element={<></>} />
            <Route path="/teachers/:id" element={<Profile />} />
            <Route path="/students/:id" element={<ProfileStudent />} />
        </Routes>
    )
}

export default AllRoutes
