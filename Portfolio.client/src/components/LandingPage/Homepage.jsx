import Header from "./components/Header";
import Service from "./components/Service";
import Oppotunity from "./components/Oppotunity";
import Challenges from "./components/Challenges";
import Footer from "../utilities/Footer";
import Navbar from "../utilities/Navbar";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Oppotunity />
      <Challenges />
      <Footer />
    </div>
  );
}
