import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import HeroSection from "./components/HeroSection";
import Developer from './components/Developer'
import CaseStudies from "./components/CaseStudies";
export default function ServicePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Developer/>
      <CaseStudies/>
      <Footer />
    </div>
  );
}
