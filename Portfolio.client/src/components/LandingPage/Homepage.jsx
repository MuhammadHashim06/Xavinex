import Header from './Header';
import Service from './Service'
import Oppotunity from './Oppotunity';
import Challenges from './Challenges';
import Footer from '../utilities/Footer';
import Navbar from '../utilities/Navbar';

export default function Homepage() {
  return (
    <div>
            <Navbar />

      <Header />
      <Service />
      <Oppotunity />
      <Challenges/>
      <Footer />

    </div>
  );
}
