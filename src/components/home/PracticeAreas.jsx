import {
  FaGavel,
  FaBalanceScale,
  FaUsers,
  FaHome,
  FaLaptopCode,
  FaBuilding,
  FaBriefcase,
  FaShoppingCart,
  FaFileAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const practiceAreas = [
  {
    title: "Criminal",
    icon: <FaGavel />,
    description: "Criminal cases and legal defense.",
  },
  {
    title: "Civil",
    icon: <FaBalanceScale />,
    description: "Civil disputes and legal matters.",
  },
  {
    title: "Family",
    icon: <FaUsers />,
    description: "Marriage, divorce and family issues.",
  },
  {
    title: "Property",
    icon: <FaHome />,
    description: "Property registration and disputes.",
  },
  {
    title: "Cyber",
    icon: <FaLaptopCode />,
    description: "Cyber crime and digital security.",
  },
  {
    title: "Corporate",
    icon: <FaBuilding />,
    description: "Business and company legal services.",
  },
  {
    title: "Labour",
    icon: <FaBriefcase />,
    description: "Employee and employer rights.",
  },
  {
    title: "Consumer",
    icon: <FaShoppingCart />,
    description: "Consumer complaints and protection.",
  },
  {
    title: "Tax",
    icon: <FaFileAlt />,
    description: "Income tax and GST legal advice.",
  },
];

function PracticeAreas() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Practice Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              onClick={() => navigate(`/lawyers/${area.title.toLowerCase()}`)}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-5 flex justify-center">
                {area.icon}
              </div>

              <h3 className="text-2xl font-semibold text-center mb-3">
                {area.title} Law
              </h3>

              <p className="text-gray-600 text-center">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;