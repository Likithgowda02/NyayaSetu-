import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Lawyers from "../pages/Lawyers";
import LawyerDetails from "../pages/LawyerDetails";
import BookAppointment from "../pages/BookAppointment";
import Login from "../pages/Login";
import Register from "../pages/Register";

import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import UserDashboard from "../pages/UserDashboard";
import LawyerDashboard from "../pages/LawyerDashboard";
import AdminDashboard from "../pages/AdminDashboard";


/* =========================
   AUTHENTICATION CHECK
========================= */

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


/* =========================
   ROLE CHECK
========================= */

function RoleRoute({ children, allowedRole }) {
  const userData = localStorage.getItem("user");

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  let user;

  try {
    user = JSON.parse(userData);
  } catch (error) {
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}


/* =========================
   ROUTES
========================= */

function AppRoutes() {
  return (
    <Routes>

      {/* =========================
          HOME
      ========================= */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* =========================
          AUTHENTICATION
      ========================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* =========================
          ABOUT & CONTACT
      ========================= */}

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />


      {/* =========================
          LAWYERS
      ========================= */}

      <Route
        path="/lawyers/:specialization"
        element={<Lawyers />}
      />

      <Route
        path="/lawyer/:id"
        element={<LawyerDetails />}
      />

      <Route
        path="/book/:id"
        element={<BookAppointment />}
      />


      {/* =========================
          USER DASHBOARD
      ========================= */}

      <Route
        path="/user-dashboard"
        element={
          <RoleRoute allowedRole="USER">
            <UserDashboard />
          </RoleRoute>
        }
      />


      {/* =========================
          LAWYER DASHBOARD
      ========================= */}

      <Route
        path="/lawyer-dashboard"
        element={
          <RoleRoute allowedRole="LAWYER">
            <LawyerDashboard />
          </RoleRoute>
        }
      />


      {/* =========================
          ADMIN DASHBOARD
      ========================= */}

      <Route
        path="/admin-dashboard"
        element={
          <RoleRoute allowedRole="ADMIN">
            <AdminDashboard />
          </RoleRoute>
        }
      />


      {/* =========================
          UNKNOWN URL
      ========================= */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default AppRoutes;