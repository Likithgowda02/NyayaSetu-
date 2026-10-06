import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "USER",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8081/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        setError(
          data?.message || "Registration failed. Please try again."
        );

        setLoading(false);
        return;
      }

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {
      console.error("Registration error:", error);

      setError(
        "Cannot connect to backend. Make sure Spring Boot is running."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-lg">

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join Nyaya Setu
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-8"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Role */}
          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="USER">User</option>
            <option value="LAWYER">Lawyer</option>
          </select>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-center font-medium">
              {error}
            </p>
          )}

          {/* Register */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p className="text-center mt-5">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-bold underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;