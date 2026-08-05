const lawyers = [
  {
    id: 1,
    name: "Adv. Udaya Holla",
    specialization: "Constitutional & Corporate Law",
    experience: "35+ Years",
    fee: "₹3000",
    rating: "4.9",
    location: "Bengaluru",
  },
  {
    id: 2,
    name: "Adv. Dhyan Chinnappa",
    specialization: "Civil & Constitutional Law",
    experience: "25+ Years",
    fee: "₹2500",
    rating: "4.8",
    location: "Bengaluru",
  },
  {
    id: 3,
    name: "Adv. K.G. Raghavan",
    specialization: "Criminal Law",
    experience: "40+ Years",
    fee: "₹3500",
    rating: "5.0",
    location: "Bengaluru",
  },
];

function FeaturedLawyers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Lawyers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="border rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-5"></div>

              <h3 className="text-2xl font-semibold text-center">
                {lawyer.name}
              </h3>

              <p className="text-center text-gray-600 mt-2">
                {lawyer.specialization}
              </p>

              <p className="text-center mt-2">
                Experience: {lawyer.experience}
              </p>

              <p className="text-center">
                Consultation: {lawyer.fee}
              </p>

              <p className="text-center">
                ⭐ {lawyer.rating}
              </p>

              <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 rounded-lg">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedLawyers;