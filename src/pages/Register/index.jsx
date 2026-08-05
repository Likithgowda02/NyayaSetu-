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

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-lg">

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          >
            <option value="USER">User</option>
            <option value="LAWYER">Lawyer</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-5">
          Already have an account?
          <Link to="/login" className="ml-2 font-bold underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;