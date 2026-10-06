import { useParams, useNavigate } from "react-router-dom";
import lawyers from "./lawyersData";

function Lawyers() {
  const { specialization } = useParams();
  const navigate = useNavigate();

 const filteredLawyers =
  specialization.toLowerCase() === "all"
    ? lawyers
    : lawyers.filter(
        (lawyer) =>
          lawyer.specialization.toLowerCase() ===
          specialization.toLowerCase()
      );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

       <h1 className="text-4xl font-bold text-center mb-10">
  {specialization.toLowerCase() === "all"
    ? "Find a Lawyer"
    : `${specialization.charAt(0).toUpperCase() +
        specialization.slice(1)} Lawyers`}
</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredLawyers.length === 0 ? (
            <h2 className="text-center text-2xl">
              No Lawyers Found
            </h2>
          ) : (
            filteredLawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-5"></div>

                <h2 className="text-2xl font-bold text-center">
                  {lawyer.name}
                </h2>

                <p className="text-center">
                  {lawyer.specialization} Lawyer
                </p>

                <p className="text-center mt-2">
                  ⭐ {lawyer.rating}
                </p>

                <p className="text-center">
                  {lawyer.experience}
                </p>

                <p className="text-center">
                  📍 {lawyer.location}
                </p>

                <p className="text-center">
                  ₹ {lawyer.fee}
                </p>

                <div className="flex gap-3 mt-5">
                  <button
  onClick={() => {
    console.log(lawyer.id);
    navigate(`/lawyer/${lawyer.id}`);
  }}
>
  View Profile
</button>

                  <button
                    onClick={() => navigate(`/book/${lawyer.id}`)}
                    className="flex-1 bg-black text-white rounded-lg py-2"
                  >
                    Book
                  </button>
                </div>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}

export default Lawyers;