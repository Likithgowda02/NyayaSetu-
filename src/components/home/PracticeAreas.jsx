import { FaGavel, FaHome, FaUsers, FaLaptopCode, FaBuilding, FaBalanceScale, FaBriefcase, FaShoppingCart, FaFileAlt } from "react-icons/fa";

const practiceAreas = [
  { icon: <FaGavel />, title: "Criminal Law" },
  { icon: <FaBalanceScale />, title: "Civil Law" },
  { icon: <FaUsers />, title: "Family Law" },
  { icon: <FaHome />, title: "Property Law" },
  { icon: <FaLaptopCode />, title: "Cyber Law" },
  { icon: <FaBuilding />, title: "Corporate Law" },
  { icon: <FaBriefcase />, title: "Labour Law" },
  { icon: <FaShoppingCart />, title: "Consumer Law" },
  { icon: <FaFileAlt />, title: "Tax Law" },
];

function PracticeAreas() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Practice Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4 flex justify-center">
                {area.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {area.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PracticeAreas;