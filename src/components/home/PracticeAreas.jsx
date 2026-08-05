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

const practiceAreas = [
  {
    title: "Criminal Law",
    icon: <FaGavel />,
    description: "Criminal cases and legal defense.",
  },
  {
    title: "Civil Law",
    icon: <FaBalanceScale />,
    description: "Civil disputes and legal matters.",
  },
  {
    title: "Family Law",
    icon: <FaUsers />,
    description: "Marriage, divorce and family issues.",
  },
  {
    title: "Property Law",
    icon: <FaHome />,
    description: "Property registration and disputes.",
  },
  {
    title: "Cyber Law",
    icon: <FaLaptopCode />,
    description: "Cyber crime and digital security.",
  },
  {
    title: "Corporate Law",
    icon: <FaBuilding />,
    description: "Business and company legal services.",
  },
  {
    title: "Labour Law",
    icon: <FaBriefcase />,
    description: "Employee and employer rights.",
  },
  {
    title: "Consumer Law",
    icon: <FaShoppingCart />,
    description: "Consumer complaints and protection.",
  },
  {
    title: "Tax Law",
    icon: <FaFileAlt />,
    description: "Income tax and GST legal advice.",
  },
];

function PracticeAreas() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Practice Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-5">
                {area.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {area.title}
              </h3>

              <p className="text-gray-600">
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