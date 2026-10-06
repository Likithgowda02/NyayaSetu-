function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 text-lg">
            Have a question or need assistance? Get in touch with us.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5">

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-gray-600">
                  support@nyayasetu.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-gray-600">
                  Bangalore, Karnataka, India
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;