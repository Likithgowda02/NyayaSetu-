function Hero() {
  return (
    <section className="bg-white text-black min-h-[90vh] flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">

        <h1 className="text-6xl font-bold mb-6">
          ⚖️ NYAYA SETU
        </h1>

        <h2 className="text-3xl font-semibold mb-4">
          Justice Made Accessible
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Find trusted and verified lawyers across India.
          Book appointments with experienced advocates
          in just a few clicks.
        </p>

        <div className="flex justify-center gap-4">

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Find a Lawyer
          </button>

          <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
            Join as Lawyer
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;