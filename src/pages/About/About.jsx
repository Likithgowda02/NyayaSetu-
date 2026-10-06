function About() {
  return (
    <div className="min-h-screen bg-white text-black">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-6">
            About Nyaya Setu
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nyaya Setu is a legal service platform designed to make
            finding and connecting with lawyers easier and more accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-7">
              Our mission is to connect people with suitable legal
              professionals through a simple and convenient platform.
              Users can explore lawyers, view their profiles and
              connect with them for legal assistance.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              What We Provide
            </h2>

            <p className="text-gray-600 leading-7">
              Nyaya Setu provides a platform where users can discover
              lawyers based on their legal requirements and access
              information about available legal professionals.
            </p>
          </div>

        </div>

        <div className="mt-10 border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Why Nyaya Setu?
          </h2>

          <p className="text-gray-600 leading-7">
            Finding the right legal professional can be difficult.
            Nyaya Setu aims to simplify this process by bringing
            users and lawyers together through an easy-to-use
            digital platform.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;