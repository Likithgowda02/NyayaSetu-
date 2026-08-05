import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Lawyers from "../pages/Lawyers";
import LawyerDetails from "../pages/LawyerDetails";
import BookAppointment from "../pages/BookAppointment";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import LawyerDashboard from "../pages/LawyerDashboard";
import AdminDashboard from "../pages/AdminDashboard";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/lawyers/:specialization" element={<Lawyers />} />
      <Route path="/lawyer/:id" element={<LawyerDetails />} />
      <Route path="/book/:id" element={<BookAppointment />} />
        <Route path="/lawyer-dashboard" element={<LawyerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;