import { Route, Routes } from "react-router-dom"
import Login from "../Pages/Login"
import Dashboard from "../Pages/Dashboard"
import Events from "../Pages/Events"
import Students from "../Pages/Students"
import Teachers from "../Pages/Teachers"
import Assignments from "../Pages/Assignments"
import Holidays from "../Pages/Holidays"

function AllRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/changepassword" element={<></>} />
        </Routes>
    )
}

export default AllRoutes
