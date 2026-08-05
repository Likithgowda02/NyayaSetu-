import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">⚖ Nyaya Setu</h1>

        <div className="flex gap-5">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link to="/lawyers/criminal" className="hover:text-gray-300">
            Find Lawyers
          </Link>

          <button className="bg-white text-black px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </nav>

      {/* Welcome */}
      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-5xl font-bold">
          Welcome 👋
        </h1>

        <p className="text-gray-600 mt-2">
          Manage all your appointments from one place.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold">
              My Appointments
            </h2>

            <p className="mt-4 text-gray-500">
              View all booked appointments.
            </p>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-lg">
              View
            </button>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold">
              Book Lawyer
            </h2>

            <p className="mt-4 text-gray-500">
              Find experienced lawyers.
            </p>

            <Link to="/lawyers/criminal">

              <button className="mt-6 w-full bg-black text-white py-3 rounded-lg">
                Search
              </button>

            </Link>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold">
              My Profile
            </h2>

            <p className="mt-4 text-gray-500">
              Update your information.
            </p>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-lg">
              Edit Profile
            </button>

          </div>

        </div>

        {/* Recent Appointments */}

        <div className="bg-white rounded-xl shadow-lg mt-12 p-8">

          <h2 className="text-3xl font-bold mb-6">
            Recent Appointments
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Lawyer</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Time</th>
                <th className="text-left py-3">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="py-4">
                  Adv. K.G. Raghavan
                </td>

                <td>10 Aug 2026</td>

                <td>10:00 AM</td>

                <td className="text-green-600 font-bold">
                  Confirmed
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default UserDashboard;