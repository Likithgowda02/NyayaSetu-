import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
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

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8081/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const text = await response.text();

      if (!response.ok) {
        setError(text || "Invalid email or password");
        setLoading(false);
        return;
      }

      const data = JSON.parse(text);

      localStorage.setItem("user", JSON.stringify(data));

      navigate("/user-dashboard");

    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Cannot connect to backend. Make sure Spring Boot is running."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center">
          ⚖ Nyaya Setu
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Connecting Justice with People
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {error && (
            <p className="text-red-600 text-center font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?

          <Link
            to="/register"
            className="ml-2 font-bold underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;