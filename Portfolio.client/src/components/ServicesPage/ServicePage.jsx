import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import HeroSection from "./components/HeroSection";
import Developer from './components/Developer'
export default function ServicePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Developer/>
      <Footer />
    </div>
  );
}
