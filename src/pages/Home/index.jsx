import Navbar from "../../components/common/Navbar";
import Hero from "../../components/home/Hero";
import PracticeAreas from "../../components/home/PracticeAreas";
import FeaturedLawyers from "../../components/home/FeaturedLawyers";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PracticeAreas />
        <FeaturedLawyers />
    </>
  );
}

export default Home;