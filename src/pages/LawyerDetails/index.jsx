import { useParams, useNavigate } from "react-router-dom";
import lawyers from "../Lawyers/lawyersData";

function LawyerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lawyer = lawyers.find((l) => l.id === Number(id));

  if (!lawyer) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Lawyer Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <div className="flex flex-col md:flex-row gap-10">

          <img
            src={lawyer.image}
            alt={lawyer.name}
            className="w-52 h-52 rounded-full border-4 border-black"
          />

          <div className="flex-1">

            <h1 className="text-4xl font-bold">
              {lawyer.name}
            </h1>

            <p className="text-xl text-gray-600 mt-2">
              {lawyer.specialization} Lawyer
            </p>

            <p className="mt-3">⭐ {lawyer.rating}</p>
            <p>📍 {lawyer.location}</p>
            <p>💼 {lawyer.experience}</p>
            <p>🏛 {lawyer.court}</p>
            <p>🎓 {lawyer.education}</p>

            <p className="mt-3">
              <strong>Languages:</strong>{" "}
              {lawyer.languages.join(", ")}
            </p>

            <p className="mt-3 text-xl font-bold">
              ₹ {lawyer.fee}
            </p>

            <p className="text-green-600 font-semibold">
              {lawyer.availability}
            </p>

          </div>

        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-3">
          About
        </h2>

        <p className="text-gray-700 leading-8">
          {lawyer.about}
        </p>

        <button
          onClick={() => navigate(`/book/${lawyer.id}`)}
          className="mt-8 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
        >
          Book Appointment
        </button>

      </div>
    </div>
  );
}

export default LawyerDetails;