import { Link, useNavigate } from "react-router-dom";

function LawyerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">⚖ Nyaya Setu</h1>

        <div className="flex gap-5 items-center">

          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <button
            onClick={handleLogout}
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Logout
          </button>

        </div>
      </nav>

      {/* Main */}
      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-5xl font-bold">
          Lawyer Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your appointments and profile.
        </p>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              Today's Appointments
            </h2>

            <h1 className="text-5xl mt-5">
              5
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              Pending Requests
            </h2>

            <h1 className="text-5xl mt-5">
              2
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              Completed
            </h2>

            <h1 className="text-5xl mt-5">
              48
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              Rating
            </h2>

            <h1 className="text-5xl mt-5">
              ⭐4.9
            </h1>
          </div>

        </div>

        {/* Appointment Requests */}
        <div className="bg-white rounded-xl shadow-lg mt-12 p-8">

          <h2 className="text-3xl font-bold mb-6">
            Appointment Requests
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="text-left py-3">
                  Client
                </th>

                <th className="text-left py-3">
                  Date
                </th>

                <th className="text-left py-3">
                  Time
                </th>

                <th className="text-left py-3">
                  Reason
                </th>

                <th className="text-left py-3">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              <tr>

                <td className="py-4">
                  Likith Gowda
                </td>

                <td>
                  10 Aug 2026
                </td>

                <td>
                  10:00 AM
                </td>

                <td>
                  Criminal Case
                </td>

                <td>

                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg mr-3">
                    Accept
                  </button>

                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                    Reject
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default LawyerDashboard;