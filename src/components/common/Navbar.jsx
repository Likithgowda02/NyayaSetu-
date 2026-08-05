function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        ⚖️ Nyaya Setu
      </h1>

      <ul className="flex gap-8">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Lawyers</li>
        <li className="cursor-pointer hover:text-gray-300">About</li>
        <li className="cursor-pointer hover:text-gray-300">Contact</li>
      </ul>

      <div className="flex gap-4">
        <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
          Login
        </button>

        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;