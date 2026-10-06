import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold cursor-pointer">
          ⚖️ Nyaya Setu
        </h1>
      </Link>

      {/* Navigation */}
      <ul className="flex gap-8">

        <li>
          <Link
            to="/"
            className="hover:text-gray-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/lawyers/criminal"
            className="hover:text-gray-300"
          >
            Lawyers
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-gray-300"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-gray-300"
          >
            Contact
          </Link>
        </li>

      </ul>

      {/* Login / Register */}
      <div className="flex gap-4">

        <Link to="/login">
          <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;