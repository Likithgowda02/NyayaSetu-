
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">⚖ Nyaya Setu - Admin</h1>

        <div className="flex gap-5">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <button className="bg-white text-black px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-5xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage the entire Nyaya Setu platform.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">Users</h2>
            <h1 className="text-5xl mt-5">150</h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">Lawyers</h2>
            <h1 className="text-5xl mt-5">45</h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">Appointments</h2>
            <h1 className="text-5xl mt-5">320</h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">Revenue</h2>
            <h1 className="text-3xl mt-5">₹2.5L</h1>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Manage Lawyers</h2>

            <button className="bg-black text-white px-5 py-3 rounded-lg mr-3">
              Add Lawyer
            </button>

            <button className="border border-black px-5 py-3 rounded-lg">
              View Lawyers
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

            <button className="bg-black text-white px-5 py-3 rounded-lg mr-3">
              View Users
            </button>

            <button className="border border-black px-5 py-3 rounded-lg">
              Reports
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;